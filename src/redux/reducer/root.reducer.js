import { combineReducers } from "redux"
import authReducer from "./auth.reducer"
import airlineReducer from "./airline.reducer"
import flightReducer from "./flight.reducer"
import bookingReducer from "./booking.reducer"
import userReducer from "./user.reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    airline: airlineReducer,
    flight: flightReducer,
    booking: bookingReducer,
    user: userReducer
})

export default rootReducer