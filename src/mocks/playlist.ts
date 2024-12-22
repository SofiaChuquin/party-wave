
export interface Playlist {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  tracks?: any;
  duration: string;
  createdBy: string;
  createdDate: string;
}


export const allPlaylists = [
  {
      "id": "1",
      "name": "Chill Vibes",
      "description": "Relax and unwind with these smooth tunes.",
      "imageUrl": "https://example.com/images/chill-vibes.jpg",
      "trackCount": 25,
      "duration": "1:30:45",
      "createdBy": "Jane Doe",
      "createdDate": "2024-01-15"
  },
  {
      "id": "2",
      "name": "Workout Motivation",
      "description": "Get pumped with these high-energy tracks.",
      "imageUrl": "https://example.com/images/workout-motivation.jpg",
      "trackCount": 15,
      "duration": "45:20",
      "createdBy": "John Smith",
      "createdDate": "2024-02-10"
  },
  {
      "id": "3",
      "name": "Classic Rock Hits",
      "description": "Timeless rock anthems from the 70s and 80s.",
      "imageUrl": "https://example.com/images/classic-rock.jpg",
      "trackCount": 20,
      "duration": "1:12:30",
      "createdBy": "Alice Johnson",
      "createdDate": "2024-03-05"
  },
  {
      "id": "4",
      "name": "Indie Favorites",
      "description": "A collection of the best indie tracks of the year.",
      "imageUrl": "https://example.com/images/indie-favorites.jpg",
      "trackCount": 18,
      "duration": "58:15",
      "createdBy": "Bob Brown",
      "createdDate": "2024-03-20"
  },
  {
      "id": "5",
      "name": "Jazz Classics",
      "description": "Smooth jazz tracks for a relaxing evening.",
      "imageUrl": "https://example.com/images/jazz-classics.jpg",
      "trackCount": 12,
      "duration": "50:10",
      "createdBy": "Charlie White",
      "createdDate": "2024-04-12"
  }
]
