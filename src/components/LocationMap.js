import Card from "../UI/Card";
import { GCP_MAP_API_KEY } from "../variables/Variables";
// import { GCP_MAP_API_KEY } from "../variables/Variables";

const LocationMap = (props) => {
  return (
    <Card>
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.lat},%20${props.lon}&zoom=6&size=400x400&markers=color:red%7C${props.lat},%20${props.lon}&key=${GCP_MAP_API_KEY}`}
        alt=""
      ></img>
    </Card>
  );
};

export default LocationMap;
