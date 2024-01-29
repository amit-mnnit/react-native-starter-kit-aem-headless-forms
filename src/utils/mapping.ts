import { mappings } from "@aemforms/af-react-native";
/*
If you are fetching the form definition from AEM, update the mapping based on the fieldType/:type.
If you create a new component, then update the mapping.
*/
const newMappings = {
  ...mappings,
  email: mappings["text-input"]
};

export default newMappings;