import { MutationKey } from "../../../shared/api/constants/api-keys/mutation-key";

import { RegisterEmailDto, RegisterResponseDto } from "@/src/shared/api/types/data-contracts";
import { ApiRequest } from "@/src/shared/api/types/native-types-api";
import { api } from "@/src/shared/api/utils/axios-api-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner-native";


export const useSignUpWithEmail = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: [MutationKey.SIGN_UP_WITH_EMAIL],
        mutationFn: signUp,
        onSuccess: async (data) => {
            if (data) {
                await AsyncStorage.setItem("token", data?.accessToken);
                await AsyncStorage.setItem("refresh", data?.refreshToken);
                // await queryClient.invalidateQueries({
                    // queryKey: [QueryKey.GET_ME],
                // });

            }
        },
        onError: (error: AxiosError<{ message: string }>) => {
            toast.error(error?.response?.data?.message, {duration: 10000});
        }
    });
};

type SigUpRequest = ApiRequest<"AUTH.SIGN_UP_WITH_EMAIL", void, RegisterEmailDto, RegisterResponseDto>;

export const signUp = async (data: RegisterEmailDto): Promise<RegisterResponseDto> => {
    const response = await api.post<SigUpRequest>({
        url: "auth/email/register",
        body: data,
    });
    return response?.data;
};
