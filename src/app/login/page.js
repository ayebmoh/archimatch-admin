"use client"
import ClientLogo from "@/assets/ClientLogo.svg";
import Filter from "@/assets/filter.png";
import { CustomInput, PageLayout } from "@/components";
import { Button, Checkbox, Tooltip, Typography } from "@/components/RemoteComponents";
import { useloginArchitect } from "@/services/queries";
import { useFormik } from "formik";
import { useCookies } from 'next-client-cookies';
import { useRouter } from "next/navigation";

import Image from "next/image";
import * as Yup from "yup";
export default function Home() {
  const router = useRouter();
  const cookies = useCookies();
  const formik = useFormik({
    initialValues:{
      email:"",
      password :""
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email("Email invalide")
      .required("Email est obligatoire"),
      password: Yup.string()
      .required("le mot de passe est requis")
      .test(
        "containsLowerCase",
        "Doit contenir au moins une lettre minuscule",
        (value) => /[a-z]/.test(value)
      )
      .test(
        "containsUpperCase",
        "Doit contenir au moins une lettre majuscule",
        (value)=> /[A-Z]/.test(value)
      )
      .test(
        "containsDigits",
        "Doit contenir au moins un chiffre",
        (value)=>/\d/.test(value)
      )
      .test(
        "containsSpecialSymbol",
        "Doit contenir au moins un caractère spécial",
        (value)=>/[!@#$%^&*(),.?":{}|<>]/.test(value)
      )
      .min(8,"Le mot de passe doit comporter au moins 8 caractères")
    }),
    onSubmit:(values)=>{
      console.log(values)
      handleLogin(values)
    }
  })
  const loginMutation = useloginArchitect("",{
    username:formik.values.email,
    password:formik.values.password
  },cookies,router)

  const handleLogin=(values) =>{
    loginMutation.mutate({
      username:formik.values.email,
      password:formik.values.password
    })
  }

  return (
 
    <PageLayout className="flex flex-col  justify-center items-center ">
      <div className="flex flex-col   justify-center items-center px-4  lg:w-screen max-w-[1210px] ">
      
        <div className="flex flex-col justify-center gap-4 lg:w-full lg:flex-row lg:justify-around  ">
        
          <div className="flex flex-col gap-4" >
          
          <div className="flex flex-col gap-2">
          <div className="absolute inset-0">
                <Image
                    src={Filter}
                    alt="background image"
                    fill
                />
            </div>
          <Image
            src={ClientLogo}
            className="lg:w-[300.85px] lg:self-start"
            alt="archimatch logo"
          />
            <Typography variant="h1" className="text-3xl">Connectez-vous a votre compte</Typography>
            <div >
              <Typography variant="paragraph" className="text-l">Content de vous revoir veuillez saisir</Typography>
              <Tooltip content="introduire votre email et mot de passe" placement="bottom-start">
                <Typography variant="paragraph" className="text-l  text-client-primary">vos coordonnées</Typography>
              </Tooltip>
            </div>
            
          </div>
          </div>
          
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-[12px]">
                <CustomInput
                  label="Email"
                  name="email"
                  placeholder="Entrez votre email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur = {formik.handleBlur}
                  error = {formik.touched.email && formik.errors.email ? true : false}
                  success={
                    formik.touched.email && !formik.errors.email ? true : false
                  }
                  errorMessage={
                    formik.touched.email && formik.errors.email ? formik.errors.email : undefined
                  }
                />
                <CustomInput
                  label="password"
                  name="password"
                  placeholder="Entrez votre password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur = {formik.handleBlur}
                  error = {formik.touched.password && formik.errors.password ? true : false}
                  success={
                    formik.touched.password && !formik.errors.password ? true : false
                  }
                  errorMessage={
                    formik.touched.password && formik.errors.password ? formik.errors.password : undefined
                  }
                />
                <div className="flex flex-row justify-between items-center">
                <Checkbox label="souviens-toi de moi pendant 30 jours " className="text-sm"/>
                <Typography variant="paragraph" className="text-sm  text-client-primary cursor-pointer">Mot de passe oublié</Typography>
                </div>
                <Button type="submit" className="z-30"   >Se connecter</Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>

  );
}
