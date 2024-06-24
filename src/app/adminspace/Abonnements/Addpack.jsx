import { CustomInput } from "@/components";
import {
  Button,
  Checkbox,
  PlusIcon,
  XMarkIcon,
} from "@/components/RemoteComponents";
import { useCreateSub } from "@/services/queries";

import { useFormik } from "formik";
import * as Yup from "yup";

const AddPack = ({ closeadd }) => {

  const formik = useFormik({
    initialValues: {
      sub_name: "",
      token_num: "",
      price: "",
      prop_platform: true,
      prop_profil: false,
      realization_expo: false,
      prop_selon_pref: false,
      mev_profil: false,
      fournisseur: false,
      devi_gen: false,
      archi_supp: false,
      active: false,
    },
    validationSchema: Yup.object({
      sub_name: Yup.string().required("Le nom du plan est requis"),
      token_num: Yup.number()
        .required("Le nombre de jetons est requis")
        .positive("Le nombre de jetons doit être positif")
        .integer("Le nombre de jetons doit être un entier")
        .typeError("Le prix doit être un nombre positive"),
      price: Yup.number()
        .required("Le prix est requis")
        .positive("Le prix doit être positif")
        .typeError("Le prix doit être un nombre Positive"),
    }),
    onSubmit: (values) => {
      // You can handle form submission here
      console.log("Form submitted with values:", values);
      const formValues = {
        ...values
      };
      handleCreateSub(formValues);
      closeadd(false);
    },
  });
  const createSubMutation = useCreateSub("", {});

  const handleCreateSub = async (values) => {
    console.log("Form values:", values);
    try {
      await createSubMutation.mutateAsync({
        ...values,
      });
      console.log("Subscription created successfully.");
    } catch (error) {
      console.error("Error creating Subscription:", error);
    }
  };
  return (
    <div className="fixed top-0 left-0  w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="relative bg-white rounded-lg shadow ">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
          <div className="text-black flex flex-row  items-center justify-center text-center ">
            <PlusIcon className="h-6 w-6 " />

            <h3 className="text-lg font-bold text-gray-900 "> Ajouter Plan </h3>
          </div>
          <button
            onClick={() => closeadd(false)}
            type="button"
            className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg  w-6 h-6 ms-auto inline-flex justify-center items-center"
          >
            <XMarkIcon />
          </button>
        </div>
        <form className="p-4 md:p-5 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row  gap-4">
            <div className="col-span-2 sm:col-span-1 sm:w-[50%]">
              <label className="block  text-sm font-semibold  text-gray-900 ">
                Nom du plan:
              </label>
              <CustomInput
                label=""
                name="sub_name"
                placeholder="Entrer le Nom du plan "
                value={formik.values.sub_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.sub_name && formik.errors.sub_name ? true : false}
                success={
                  formik.touched.sub_name && !formik.errors.sub_name ? true : false
                }
                errorMessage={
                  formik.touched.sub_name && formik.errors.sub_name ? formik.errors.sub_name : undefined
                } />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block  text-sm font-semibold text-gray-900 ">
                Nombre des jetons gratuit:
              </label>
              <CustomInput name="token_num"
                label=""

                placeholder="Ecrire le Nombre des jetons du Plan"
                value={formik.values.token_num}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.token_num && formik.errors.token_num ? true : false}
                success={
                  formik.touched.token_num && !formik.errors.token_num ? true : false
                }
                errorMessage={
                  formik.touched.token_num && formik.errors.token_num ? formik.errors.token_num : undefined
                } />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block  text-sm font-semibold text-gray-900 ">
                Prix du plan:
              </label>
              <CustomInput name="price"
                label=""

                placeholder="Ecrire le prix du Plan"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && formik.errors.price ? true : false}
                success={
                  formik.touched.price && !formik.errors.price ? true : false
                }
                errorMessage={
                  formik.touched.price && formik.errors.price ? formik.errors.price : undefined
                } />
            </div>
          </div>
          <div>
            <label className="block  text-sm font-semibold text-gray-900 ">
              Les Options offerts:
            </label>
            <div className="grid grid-cols-2 items-start ">

              <Checkbox label="Projets clients proposés par la plateforme" name="prop_platform" color="blue" checked={formik.values.prop_platform}
                onChange={(e) => formik.setFieldValue("prop_platform", e.target.checked)} />
              <Checkbox label="Projets clients proposés sur votre profil" name="prop_profil" color="blue" checked={formik.values.prop_profil}
                onChange={(e) => formik.setFieldValue("prop_profil", e.target.checked)} />
              <Checkbox label="Exposition de vos réalisations sur ArchiMatch" name="realization_expo" color="blue" checked={formik.values.realization_expo}
                onChange={(e) => formik.setFieldValue("realization_expo", e.target.checked)} />
              <Checkbox label="Accès privilégié aux fournisseurs partenaires" name="fournisseur" color="blue" checked={formik.values.fournisseur}
                onChange={(e) => formik.setFieldValue("fournisseur", e.target.checked)} />
              <Checkbox label="Accès au support ArchiMatch" name="archi_supp" checked={formik.values.archi_supp}
                onChange={(e) => formik.setFieldValue("archi_supp", e.target.checked)} color="blue" />
              <Checkbox label="Proposition des projets selon vos Préférences" name="prop_selon_pref" color="blue" checked={formik.values.prop_selon_pref}
                onChange={(e) => formik.setFieldValue("prop_selon_pref", e.target.checked)} />
              <Checkbox label="Mise en vedette de profil dans ArchiMatch" name="mev_profil" color="blue" checked={formik.values.mev_profil}
                onChange={(e) => formik.setFieldValue("mev_profil", e.target.checked)} />
              <Checkbox label="Génération des devis" name="devi_gen" color="blue" checked={formik.values.devi_gen}
                onChange={(e) => formik.setFieldValue("devi_gen", e.target.checked)} />

            </div>
          </div>
          <div className="flex flex-col items-start ">
            <label className="block  text-sm font-semibold text-gray-900 ">
              Activation
            </label>
            <Checkbox checked={formik.values.active}
              onChange={(e) => formik.setFieldValue("active", e.target.checked)} label="Active" color="green"></Checkbox>
            <Button
              onClick={formik.handleSubmit}

              size="sm"
              className="mt-2 mb-3 text-md rounded-8px w-full p-2"
            >
              Ajouter
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPack;
