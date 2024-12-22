import { Playlist } from '@/mocks/playlist';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SPOTIFY_API,
});

// GET: Obtener playlists
export const getPlaylists = async (): Promise<Playlist[]> => {
  try {
    const response = await api.get<any>('/spotify/playlists');
    return response.data.items;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw error;
  }
};

// POST: Crear una nueva playlist
export const createPlaylist = async (playlistData: Omit<Playlist, 'id'>): Promise<Playlist> => {
  try {
    const response = await api.post<Playlist>('/spotify/playlists', playlistData);
    return response.data;
  } catch (error) {
    console.error('Error creating playlist:', error);
    throw error;
  }
};
