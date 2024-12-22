'use client';
import React, { useEffect, useState } from 'react';
import PlaylistCard from '../components/PlaylistCard';
import SearchBar from '../components/SearchBar';
import { Playlist, allPlaylists } from '@/mocks/playlist';
import { useRouter } from 'next/navigation';
import { getPlaylists } from '@/services/spotifyApi';

const HomePage: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredPlaylists, setFilteredPlaylists] =
    useState<Playlist[]>(allPlaylists);
  const router = useRouter();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const data = await getPlaylists();
        setPlaylists(data);
        setFilteredPlaylists(data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredPlaylists(playlists);
      return;
    }

    const searchResults = playlists.filter((playlist) =>
      playlist.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlaylists(searchResults);
  };

  const handlePlay = (id: string) => {
    console.log('Play playlist with ID:', id);
  };

  const handleCreateNew = () => {
    router.push('/playlist/create');
  };

  if (loading) return <p>Loading playlists...</p>;

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold text-white mb-6 text-center'>
        Party Wave
      </h1>
      <SearchBar onSearch={handleSearch} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredPlaylists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            playlist={playlist}
            onPlay={handlePlay}
          />
        ))}
        <PlaylistCard
          playlist={{
            id: 'add-new',
            name: 'Create New Playlist',
            description: 'Tap to create a new playlist.',
            imageUrl: 'https://example.com/images/create-playlist.jpg',
            tracks: { total: 0 },
            duration: 'N/A',
            createdBy: 'N/A',
            createdDate: 'N/A',
          }}
          onCreateNew={handleCreateNew}
        />
      </div>
    </div>
  );
};

export default HomePage;
