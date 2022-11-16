import { createSlice } from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../store';
import {IPatientShort} from "../../models/IPatientShort";
import {PaginationPatientsForCertainDoctor, patientAPI} from "../../services/PatientService";

const patientsSlice = createSlice({
  name: 'patientsTable',
  initialState: {
    entities: [] as Array<IPatientShort>,
    filteredEntities: [] as Array<IPatientShort>,
    isLoading: true as boolean,
    error: null as string | null,
  },
  reducers: {
      patientsRequested: state => {
      state.isLoading = true;
    },
      patientsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    filteredPatientsReceived: (state, action) => {
      state.filteredEntities = action.payload;
      state.isLoading = false;
    },
      patientsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

  },
});

const { actions, reducer: patientsReducer } = patientsSlice;

const { patientsRequested, patientsReceived, patientsRequestFailed, filteredPatientsReceived } = actions;

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

export const loadPatientsList = (userID: string ): AppThunk => async dispatch => {
  dispatch(patientsRequested());
  try {
      const body: PaginationPatientsForCertainDoctor = {
          doctorID: userID,
          limit: -1,
          numofpage: -1,
      }
      const {data: patients, error, isLoading, refetch} =  patientAPI.useFetchPatientsQuery(body)
    dispatch(patientsReceived(patients || []));
  } catch (error) {
    dispatch(patientsRequestFailed(error.message));
  }
};

export const loadFilteredPatientsList =
  (userID: string  , _queryParams?: any): AppThunk =>
  async dispatch => {
    dispatch(patientsRequested());
    try {
        const body: PaginationPatientsForCertainDoctor = {
            doctorID: userID,
            limit: -1,
            numofpage: -1,
            queryParams: _queryParams,
        }
        const {data: patients, error, isLoading, refetch} =  patientAPI.useFetchPatientsQuery(body)

      dispatch(filteredPatientsReceived(patients || []));
    } catch (error) {
      dispatch(patientsRequestFailed(error.message));
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

export const getPatients = () => (state: RootState) => state.patients.entities;
export const getFilteredPatients = () => (state: RootState) => state.patients.filteredEntities;
export const getPatientsLoadingStatus = () => (state: RootState) => state.patients.isLoading;

export const getPatientById = (patientId: string) => (state: RootState) => {
  if (state.patients.entities) {
    return state.patients.entities.find(patient => patient.id === patientId);
  }
};

// export const getRoomsByIds = (roomsIds: string[]) => (state: RootState) => {
//   if (state.rooms.entities) {
//     return state.rooms.entities.filter(room => (roomsIds.length > 0 ? roomsIds.includes(room._id || '') : false));
//   }
//   return [];
// };

export default patientsReducer;
