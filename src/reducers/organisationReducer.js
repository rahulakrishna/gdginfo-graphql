import { FETCH_ORGANISATION_INFO } from '../utils/constants';

const organisationState = {

};

export default function reducer(state = organisationState,action) {
    switch (action.type) {
        case FETCH_ORGANISATION_INFO: {
            return {...state, info:action.payload};
        }
        default: {
            return state;
        }
    }
}