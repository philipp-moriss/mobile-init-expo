// import {MutationKey} from "../../../shared/api/constants/api-keys/mutation-key";

// import {toast} from "sonner-native";
// import {useMutation, useQueryClient} from "@tanstack/react-query";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import {QueryKey} from "@/src/shared/api/constants/api-keys/query-key";
// import {ApiRequest} from "@/src/shared/api/types/native-types-api";
// import {ISignUpDto, SigInPayloadType} from "@/src/shared/api/types/data-contracts";
// import {api} from "@/src/shared/api/utils/axios-api-base";
// import {AxiosError} from "axios";


// export const useSignUp = () => {
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationKey: [MutationKey.SIGN_UP],
//         mutationFn: signUp,
//         onSuccess: async (data) => {
//             if (data) {
//                 await AsyncStorage.setItem("token", data?.access_token);
//                 await AsyncStorage.setItem("refresh", data?.refresh_token);
//                 await queryClient.invalidateQueries({
//                     queryKey: [QueryKey.GET_ME],
//                 });

//             }
//         },
//         onError: (error: AxiosError<{ message: string }>) => {
//             toast.error(error?.response?.data?.message, {duration: 10000});
//         }
//     });
// };

// type SigUpRequest = ApiRequest<"AUTH.SIGN_UP", void, SigInPayloadType, ISignUpDto>;

// export const signUp = async (data: SigInPayloadType): Promise<ISignUpDto> => {
//     const response = await api.post<SigUpRequest>({
//         url: "auth/user/register",
//         body: data,
//     });
//     return response?.data;
// };
