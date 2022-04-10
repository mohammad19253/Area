import dynamic from 'next/dynamic';

const Add_Node = dynamic(() => import('./leaflet_add_node'), {
  ssr: false
});

export default Add_Node;