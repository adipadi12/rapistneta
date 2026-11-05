import { useState, useEffect } from 'react';
import type { Politician, FilterParams, Statistics } from '../types';
import { politicianService } from '../data';

/**
 * Custom hook for fetching politicians with filters
 */
export const usePoliticians = (filters: FilterParams) => {
  const [politicians, setPoliticians] = useState<Politician[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchPoliticians = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await politicianService.search(filters);
        if (mounted) {
          setPoliticians(result.data);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load politicians');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchPoliticians();

    return () => {
      mounted = false;
    };
  }, [
    filters.searchTerm,
    filters.status,
    filters.state,
    filters.district,
    filters.party,
  ]);

  return { politicians, loading, error };
};

/**
 * Custom hook for fetching all politicians (for statistics, spin wheel, etc.)
 */
export const useAllPoliticians = () => {
  const [politicians, setPoliticians] = useState<Politician[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchAll = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await politicianService.getAll();
        if (mounted) {
          setPoliticians(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load politicians');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchAll();

    return () => {
      mounted = false;
    };
  }, []);

  return { politicians, loading, error };
};

/**
 * Custom hook for fetching statistics
 */
export const useStatistics = (filters?: FilterParams) => {
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchStatistics = async () => {
      try {
        setLoading(true);
        setError(null);
        const stats = await politicianService.getStatistics(filters);
        if (mounted) {
          setStatistics(stats);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load statistics');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchStatistics();

    return () => {
      mounted = false;
    };
  }, [filters?.searchTerm, filters?.status, filters?.state, filters?.district]);

  return { statistics, loading, error };
};

/**
 * Custom hook for getting a random politician
 */
export const useRandomPolitician = (filters?: FilterParams) => {
  const [politician, setPolitician] = useState<Politician | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRandom = async () => {
    try {
      setLoading(true);
      setError(null);
      const random = await politicianService.getRandomPolitician(filters);
      setPolitician(random);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get random politician');
    } finally {
      setLoading(false);
    }
  };

  return { politician, loading, error, getRandom };
};
