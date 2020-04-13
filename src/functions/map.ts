/** 
 * Naver Map
 */

export const initNaverMap = () => {
  const mapOptions: naver.maps.MapOptions = {
    useStyleMap: true,
    center: new naver.maps.LatLng(37.6682521, 126.9495151),
    zoom: 15,
  };
  const map = new naver.maps.Map('map', mapOptions);

  const markerOptions: naver.maps.MarkerOptions = {
    map,
    position: { lat: 37.6682521, lng: 126.9495151 },
    icon: {
      url: 'https://firebasestorage.googleapis.com/v0/b/wedding-invi.appspot.com/o/map-marker.svg?alt=media&token=dcd71850-1cd8-431e-9322-d9ba87ac948e',
      size: new naver.maps.Size(35, 35),
    }
  };
  new naver.maps.Marker(markerOptions);
};
