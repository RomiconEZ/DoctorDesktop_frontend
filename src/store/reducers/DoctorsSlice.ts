import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDoctorShort} from "../../models/IDoctorShort";
import {useAppSelector} from "../../hooks/redux";
import {RootState} from "../store";

interface DoctorTableState {
  entities: Array<IDoctorShort>;
  filteredEntities: Array<IDoctorShort>;
  isLoading: boolean;
  error: string | null;
}

const initialState: DoctorTableState = {
  entities: [],
  filteredEntities: [] ,
  isLoading: true,
  error: null,
}


export const doctorsSlice = createSlice({
  name: 'doctorAPI',
  initialState,
  reducers:
      {
    doctorsRequested (state) {
      state.isLoading = true;
    },

      doctorsReceived (state, action: PayloadAction<Array<IDoctorShort>>)
      {
      state.entities = action.payload;
      state.isLoading = !state.isLoading;
    },
    filteredDoctorsReceived (state, action: PayloadAction<Array<IDoctorShort>>)
{
      state.filteredEntities = action.payload;
      state.isLoading = false;
    },
      doctorsRequestFailed (state, action)
      {
      state.error = action.payload;
      state.isLoading = false;
    },

  },
});

export default doctorsSlice.reducer; // вытаскиваем reducer

export const getDoctorsLoadingStatus = () => (state: RootState) => state.doctorsReducer.isLoading;



// const { actions, reducer: doctorsReducer } = doctorsSlice;
//
// export const { doctorsRequested, doctorsReceived, doctorsRequestFailed, filteredDoctorsReceived } = actions;

// const addBookingRoomRequested = createAction('rooms/addBookingRoomRequested');
// const addBookingRoomRequestedSuccess = createAction('rooms/addBookingRoomRequestedSuccess');
// const addBookingRoomRequestedFailed = createAction('rooms/addBookingRoomRequestedFailed');
//
// const removeBookingRoomRequested = createAction('rooms/removeBookingRoomRequested');
// const removeBookingRoomRequestedSuccess = createAction('rooms/removeBookingRoomRequestedSuccess');
// const removeBookingRoomRequestedFailed = createAction('rooms/removeBookingRoomRequestedFailed');
//
// const roomUpdateRequested = createAction('rooms/roomUpdateRequested');
// const roomUpdateRequestedFailed = createAction('rooms/roomUpdateRequestedFailed');

// export const LoadDoctorsList = (userID: number ) => {
//
//     try {
//       dispatch(doctorsRequested());
//       const body: PaginationDoctors = {
//           doctorID: userID,
//           limit: 100,
//           numofpage: -1,
//       }
//       const {data: doctors, error, isLoading, refetch} =  doctorAPI.useFetchDoctorsQuery(body)
//       console.log(error)
//       console.log(doctors)
//       dispatch(doctorsReceived(doctors || []));
//   } catch (error) {
//       console.log(error)
//         dispatch(doctorsRequestFailed(error.message));
//   }
// };
// export const LoadFilteredDoctorsList=(userID: number  , _queryParams?: any)=>{
//     const dispatch = useAppDispatch()
//     dispatch(doctorsRequested());
//
//     try {
//         const body: PaginationDoctors = {
//             doctorID: userID,
//             limit: -1,
//             numofpage: -1,
//             queryParams: _queryParams,
//         }
//         const {data: doctors, error, isLoading, refetch} =  doctorAPI.useFetchDoctorsQuery(body)
//
//       dispatch(filteredDoctorsReceived(doctors || []));
//     } catch (error) {
//         dispatch(doctorsRequestFailed(error.message));
//     }
//   };

// export const addBookingRoom =
//   (payload: BookingType): AppThunk =>
//   async dispatch => {
//     dispatch(addBookingRoomRequested());
//     try {
//       roomsService.setBooking(payload);
//       dispatch(addBookingRoomRequestedSuccess());
//     } catch (error) {
//       dispatch(addBookingRoomRequestedFailed());
//     }
//   };
//
// export const removeBookingRoom =
//   (payload: { roomId: string; _id: string }): AppThunk =>
//   async dispatch => {
//     dispatch(removeBookingRoomRequested());
//     try {
//       roomsService.deleteBooking(payload);
//       dispatch(removeBookingRoomRequestedSuccess());
//     } catch (error) {
//       dispatch(removeBookingRoomRequestedFailed());
//     }
//   };
//
// export const updateRoomData =
//   (payload: RoomType): AppThunk =>
//   async dispatch => {
//     dispatch(roomUpdateRequested());
//     try {
//       const { content } = await roomsService.update(payload);
//       dispatch(roomUpdated(content));
//     } catch (error) {
//       console.log(error);
//       dispatch(roomUpdateRequestedFailed());
//     }
//   };

// export const getDoctors = () => (state: RootState) => state.doctors.entities;
// export const getFilteredDoctors = () => (state: RootState) => state.doctors.filteredEntities;
// export const getDoctorsLoadingStatus = () => (state: RootState) => state.doctors.isLoading;
//
// export const getDoctorById = (doctorId: number) => (state: RootState) => {
//   if (state.doctors.entities) {
//     return state.doctors.entities.find(doctor => doctor.id === doctorId);
//   }
// };

// export const getRoomsByIds = (roomsIds: string[]) => (state: RootState) => {
//   if (state.rooms.entities) {
//     return state.rooms.entities.filter(room => (roomsIds.length > 0 ? roomsIds.includes(room._id || '') : false));
//   }
//   return [];
// };

// export default doctorsReducer;
