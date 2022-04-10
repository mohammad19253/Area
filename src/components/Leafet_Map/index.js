import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Leafet_Map'), {
  ssr: false
});

export default Map;