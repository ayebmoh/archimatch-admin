"use client"
import {
  Button,
  Typography
} from "@/components/RemoteComponents";
import { useHandleArchitectRequest } from "@/services/queries";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomSelect from "./CustomSelect";
export default function Modalaccept({ onclose, openModalAccept, onConfirm, activeRequest }) {

  const house_type_options = [
    { id: 1, content: "option1", value: "option1" },
    { id: 2, content: "option2", value: "option2" }]
  const work_type_options = [{ id: 1, content: "option1", value: "option1" }, { id: 2, content: "option2", value: "option2" }]
  const work_style_options = [{ id: 1, content: "option1", value: "option1" }, { id: 2, content: "option2", value: "option2" }]
  const categories_options = [{ id: 1, content: "option1", value: "option1" }, { id: 2, content: "option2", value: "option2" }]
  const complexity_options = [{ id: 1, content: "option1", value: "option1" }, { id: 2, content: "option2", value: "option2" }]


  const formik = useFormik({
    initialValues: {
      house_type: "",
      work_type: "",
      work_style: "",
      categories: "",
      complexity: ""
    },

    validationSchema: Yup.object({
      house_type: Yup.string()
        .required("le type de bien est obligatoire"),
      work_type: Yup.string()
        .required("le type de travaux est obligatoire"),
      work_style: Yup.string()
        .required("le work_style est obligatoire"),
      categories: Yup.string()
        .required("la categorie est obligatoire"),
      complexity: Yup.string()
        .required("la complexité est obligatoire"),

    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      handleArchitectRequest(values);
      onclose()

    },
  });

  const handleArchitectRequestMutation = useHandleArchitectRequest(
    "architect_requests",
    {},
  );
  const handleArchitectRequest = (values) => {
    const userData = handleArchitectRequestMutation.mutate({ ...values, id: activeRequest, accept: true });
  };

  return (
    <div
      onClick={onclose}
      className={`fixed top-0 left-0  w-full h-full flex justify-center items-center bg-black bg-opacity-50  
      ${openModalAccept ? "visible bg-black bg-opacity-50" : "invisible"
        }`}
    >
      <div onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg shadow ">
        <div className="py-7 px-5 flex flex-col gap-3">
          <div className=" text-black  text-center font-bold items-center  justify-center ">
            <h1 className="text-xl ">Confirmation de l’acceptaion </h1>
            <Typography className="text-lg mt-4 text-gray-600 ">
              Veuillez sélectionnez les quatre variables
            </Typography>
          </div>
          <div className="my-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-72">
              <CustomSelect
                options={house_type_options}
                label="Type de bien"
                containerClassName=""
                value={formik.values.house_type}
                onChange={(value) => formik.setFieldValue("house_type", value)}
                onBlur={formik.handleBlur}
                error={formik.touched.house_type && formik.errors.house_type ? true : false}
                success={formik.touched.house_type && !formik.errors.house_type ? true : false}
                errorMessage={
                  formik.touched.house_type && formik.errors.house_type
                    ? formik.errors.house_type
                    : undefined
                }
                name="house_type"
              />
            </div>
            <div className="flex flex-col gap-2 w-72">

              <CustomSelect
                options={work_type_options}
                label="Type de travaux"
                containerClassName=""
                value={formik.values.work_type}
                onChange={(value) => formik.setFieldValue("work_type", value)}
                onBlur={formik.handleBlur}
                error={formik.touched.work_type && formik.errors.work_type ? true : false}
                success={formik.touched.work_type && !formik.errors.work_type ? true : false}
                errorMessage={
                  formik.touched.work_type && formik.errors.work_type
                    ? formik.errors.work_type
                    : undefined
                }
                name="work_type"
              />
            </div>
            <div className="flex flex-col gap-2 w-72">

              <CustomSelect
                options={work_style_options}
                label="work_style"
                containerClassName=""
                value={formik.values.work_style}
                onChange={(value) => formik.setFieldValue("work_style", value)}
                onBlur={formik.handleBlur}
                error={formik.touched.work_style && formik.errors.work_style ? true : false}
                success={formik.touched.work_style && !formik.errors.work_style ? true : false}
                errorMessage={
                  formik.touched.work_style && formik.errors.work_style
                    ? formik.errors.work_style
                    : undefined
                }
                name="work_style"
              />
            </div>
            <div className="flex flex-col gap-2 w-72">

              <CustomSelect
                options={categories_options}
                label="Categorie "
                containerClassName=""
                value={formik.values.categories}
                onChange={(value) => formik.setFieldValue("categories", value)}
                onBlur={formik.handleBlur}
                error={formik.touched.categories && formik.errors.categories ? true : false}
                success={formik.touched.categories && !formik.errors.categories ? true : false}
                errorMessage={
                  formik.touched.categories && formik.errors.categories
                    ? formik.errors.categories
                    : undefined
                }
                name="categories"
              />
            </div>
            <div className="flex flex-col gap-2 w-72">

              <CustomSelect
                options={complexity_options}
                label="Complexité "
                containerClassName=""
                value={formik.values.complexity}
                onChange={(value) => formik.setFieldValue("complexity", value)}
                onBlur={formik.handleBlur}
                error={formik.touched.complexity && formik.errors.complexity ? true : false}
                success={formik.touched.complexity && !formik.errors.complexity ? true : false}
                errorMessage={
                  formik.touched.complexity && formik.errors.complexity
                    ? formik.errors.complexity
                    : undefined
                }
                name="complexity"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <Button
              size="sm"
              className="bg-client-primary size-min  rounded-8 w-[50%]  drop-shadow-md text-base  "
              onClick={formik.submitForm}
            >
              Confirmer
            </Button>
            <Button
              onClick={onclose}
              size="sm"
              className=" text-black bg-white hover:bg-gray-100 size-min   border-gray-600 w-[50%] border outlined-8   rounded-8  drop-shadow-md text-base "
            >
              Annuler
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
