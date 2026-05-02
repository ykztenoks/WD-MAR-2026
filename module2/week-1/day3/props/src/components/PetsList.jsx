import NameComponent from "./NameComponent";
import { AgeComponent } from "./AgeComponent";
import { OwnerComponent } from "./OwnerComponent";

function PetsList(props) {
  return (
    <div className="pet-card">
      <NameComponent name={props.pet.name} />
      <AgeComponent age={props.pet.age} />
      <OwnerComponent owner={props.pet.owner} />
    </div>
  );
}
export default PetsList;
