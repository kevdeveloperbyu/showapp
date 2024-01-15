import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const config = {
    screens: {
        AuthStack: {
            screens: {
                ContinueWith: 'continuewith'
            }
        },
        HomeStack:{
            screens: {
                Home: 'home'
            }
        }
    },
    // NotFound: '*',

};
const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['2show://2show/'],
    config,
};


export default linking;

