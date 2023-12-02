import { deployContract } from "./utils";

// An example of a basic deploy script
// It will deploy a Greeter contract to selected network
// as well as verify it on Block Explorer if possible for the network
export default async function () {
  const contractArtifactName = "Messenger";
  const constructorArguments = ["Yozhik calling"];
  await deployContract(contractArtifactName, constructorArguments);
}
