import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) =>{ //We can only perform immutable changes, this function will return an updated version of the current state after performing actions 
    return state;
};