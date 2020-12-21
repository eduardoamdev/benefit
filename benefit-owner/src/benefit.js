import BenefitContract from "../../benefit-api/build/contracts/Token.json";
import contract from "truffle-contract";

export default async(provider) => {
    const benefit = contract(BenefitContract);
    benefit.setProvider(provider);
    let instance = await benefit.deployed();
    return instance;
};
