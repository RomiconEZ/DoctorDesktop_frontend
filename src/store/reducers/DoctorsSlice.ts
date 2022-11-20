import { createSlice } from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../store';
import {IDoctorShort} from "../../models/IDoctorShort";
import {doctorAPI, PaginationDoctors} from "../../services/DoctorService";

const doctorsSlice = createSlice({
  name: 'doctorsTable',
  initialState: {
    entities: [] as Array<IDoctorShort>,
    filteredEntities: [] as Array<IDoctorShort>,
    isLoading: true as boolean,
    error: null as string | null,
  },
  reducers: {
    doctorsRequested: state => {
      state.isLoading = true;
    },
      doctorsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    filteredDoctorsReceived: (state, action) => {
      state.filteredEntities = action.payload;
      state.isLoading = false;
    },
      doctorsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

  },
});

const { actions, reducer: doctorsReducer } = doctorsSlice;

const { doctorsRequested, doctorsReceived, doctorsRequestFailed, filteredDoctorsReceived } = actions;

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

export const loadDoctorsList = (userID: number ): AppThunk => async dispatch => {
  dispatch(doctorsRequested());
  try {
      const body: PaginationDoctors = {
          doctorID: userID,
          limit: -1,
          numofpage: -1,
      }
      const {data: doctors, error, isLoading, refetch} =  doctorAPI.useFetchDoctorsQuery(body)
    dispatch(doctorsReceived(doctors || []));
  } catch (error) {
    dispatch(doctorsRequestFailed(error.message));
  }
};

export const loadFilteredDoctorsList =
  (userID: number  , _queryParams?: any): AppThunk =>
  async dispatch => {
    dispatch(doctorsRequested());
    try {
        const body: PaginationDoctors = {
            doctorID: userID,
            limit: -1,
            numofpage: -1,
            queryParams: _queryParams,
        }
        const {data: doctors, error, isLoading, refetch} =  doctorAPI.useFetchDoctorsQuery(body)

      dispatch(filteredDoctorsReceived(doctors || []));
    } catch (error) {
      dispatch(doctorsRequestFailed(error.message));
    }
  };

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

export const getDoctors = () => (state: RootState) => state.doctors.entities;
export const getFilteredDoctors = () => (state: RootState) => state.doctors.filteredEntities;
export const getDoctorsLoadingStatus = () => (state: RootState) => state.doctors.isLoading;

export const getDoctorById = (doctorId: number) => (state: RootState) => {
  if (state.doctors.entities) {
    return state.doctors.entities.find(doctor => doctor.id === doctorId);
  }
};

// export const getRoomsByIds = (roomsIds: string[]) => (state: RootState) => {
//   if (state.rooms.entities) {
//     return state.rooms.entities.filter(room => (roomsIds.length > 0 ? roomsIds.includes(room._id || '') : false));
//   }
//   return [];
// };

export default doctorsReducer;
