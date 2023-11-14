import React from 'react';

const Map = (props) => {
    const loc = "https://map.ir/iframe/lat/" + props.lat + "/lng/" + props.long + "/z/14/p/ما اینجاییم";
    return (
      <div>
        <iframe
          className="rounded-xl"
          title='map'
          width="900"
          height="400"
          src={loc}
        ></iframe>
      </div>
    );
};

export default Map;