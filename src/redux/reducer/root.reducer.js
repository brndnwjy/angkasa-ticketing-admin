import { combineReducers } from "redux"
import authReducer from "./auth.reducer"
import airlineReducer from "./airline.reducer"
import flightReducer from "./flight.reducer"
import bookingReducer from "./booking.reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    airline: airlineReducer,
    flight: flightReducer,
    booking: bookingReducer
})

export default rootReducer