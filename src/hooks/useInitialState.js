import { useEffect, useState } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState([
    {
      mylist: [],
      trends: [],
      originals: [],
    },
  ]);
  const getVideos = async () => {
    try {
      const response = await fetch(API);
      const videojson = await response.json(response);
      setVideos(videojson);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
  return videos;
};

export default useInitialState;
