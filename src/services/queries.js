import { openAlert } from "@/components/OpenAlert";
import { handleErrors } from "@/utils";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

import { deleteData, fetchData, postData } from "./api";


export const useFetchData = (endpoint, key) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => fetchData(endpoint),
  });
};

export async function preFetchData(queryClient, endpoint, key) {
  return await queryClient.prefetchQuery({
    queryKey: [key],
    queryFn: () => fetchData(endpoint),
  });
}

export const useloginArchitect = (key, data,cookies,router) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/token/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        if (result.data.user.user_type !== "Admin") {
          openAlert(false, "Vous devez etre un admin");
        } else {
          openAlert(true, "vous avez connecté avec succes");
          cookies.set('authToken', result.data.token)
          cookies.set("user_type",result.data.user.user_type)
          router.push("/adminspace/archirequests")
        }
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useCreateAdmin = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/admin/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "vous avez ajouter un admin");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useHandleArchitectRequest = (key,data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) =>postData("/archimatch_app/architectRequest/handle_request/",data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre action a été enregistré");
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useUpdateAdmin = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/admin/update/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "vous avez Modifier un admin");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
}


export const useCreateSub = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/subscriptions/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "vous avez ajouter un Abonnement");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useDeleteSub = (key) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (id) => deleteData(`/archimatch_app/subscriptions/${id}`),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "vous avez Supprimer un Abonnement");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useUpdateSub = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData(`/archimatch_app/subscriptions/update/`, data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "vous avez modifier un abonnement");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
}
// export const useActivateSub = (key, data) => {
//   const queryClient = new QueryClient();
//   return useMutation({
//     mutationFn: (data) => postData("/archimatch_app/architect/update_subscription/", data),
//     onSettled: async (result, error) => {
//       if (error) {
//         handleErrors(error.response);
//       } else {
        
//           openAlert(true, "vous avez modifier l'activation d'abonnement");
          
        
//         await queryClient.invalidateQueries({ queryKey: [key] });
//       }
//     },
//   });
// }


export const useSetArchiSubscription = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData(`/archimatch_app/subscriptions/update/`, data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "vous avez modifier un abonnement");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  })}


  export const useActivateSub = (key, data) => {
    const queryClient = new QueryClient();
    return useMutation({
      mutationFn: (data) => postData(`/archimatch_app/architect/set_subscription/`, data),
      onSettled: async (result, error) => {
        if (error) {
          handleErrors(error.response);
        } else {
          
            openAlert(true, "vous avez modifier l'Activation");
            
          
          await queryClient.invalidateQueries({ queryKey: [key] });
        }
      },
    });
  }


  export const useRelance = (key, data) => {
    const queryClient = new QueryClient();
    return useMutation({
      mutationFn: (data) => postData(`/archimatch_app/admin/payment_in_progress/`, data),
      onSettled: async (result, error) => {
        if (error) {
          handleErrors(error.response);
        } else {
          
            openAlert(true, "Email envoyer");
            
          
          await queryClient.invalidateQueries({ queryKey: [key] });
        }
      },
    });
  }

  export const useDeleteAdmin = (key) => {
    const queryClient = new QueryClient();
    return useMutation({
      mutationFn: (id) => deleteData(`/archimatch_app/admin/${id}/`),
      onSettled: async (result, error) => {
        if (error) {
          handleErrors(error.response);
        } else {
          
            openAlert(true, "vous avez Supprimer un Admin");
            
          
          await queryClient.invalidateQueries({ queryKey: [key] });
        }
      },
    });
  };

  export const useProlonger = (key, data) => {
    const queryClient = new QueryClient();
    return useMutation({
      mutationFn: (data) => postData("/archimatch_app/admin/prolonger_selection/", data),
      onSettled: async (result, error) => {
        if (error) {
          handleErrors(error.response);
        } else {
          
            openAlert(true, "Date Prolonger");
            
          
          await queryClient.invalidateQueries({ queryKey: [key] });
        }
      },
    });
  }

  export const useGetarchiReportDescription = (id) => {
    return useQuery({
      queryKey: ["reports", id],
      queryFn: () => fetchData(`/archimatch_app/admin/report_by_archireport/${id}`)
    });
  };