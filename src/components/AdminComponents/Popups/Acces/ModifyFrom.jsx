import CustomSelect from "@/components/CustomSelect";
import { Checkbox, PencilIcon, Spinner, XMarkIcon } from "@/components/RemoteComponents";
import { useUpdateAdmin } from "@/services/queries";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const ModiForm = ({ closemodi, currentdata }) => {
  const UpdateAdminMutation = useUpdateAdmin("", {});
  const [firstopen, setfirstopen] = useState(false)
  const [first_name, setfirstname] = useState(currentdata.user.first_name)
  const [last_name, setlastname] = useState(currentdata.user.last_name)
  const [email, setemail] = useState(currentdata.user.email)


  const UpdateAdmin = async (values) => {
    console.log("Form values:", values);
    try {
      await UpdateAdminMutation.mutateAsync({
        ...values,
      });
      console.log("Admin updated successfully.");
    } catch (error) {
      console.error("Error updating admin:", error);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: currentdata.user.first_name,
      last_name: currentdata.user.last_name,
      email: currentdata.user.email,
    },
    validationSchema: Yup.object({

    }),
    onSubmit: (values) => {
      console.log(values)
      const formValues = {
        id: currentdata.id,
        user: {
          email: values.email,
          username: values.email,
          first_name: values.first_name,
          last_name: values.last_name,
        },
        rights: selectedRights,

      };
      UpdateAdmin(formValues);
      closemodi(false);
    },
  });
  // useEffect(() => {

  //   setfirstname(currentdata.user.first_name)
  //   setlastname(currentdata.user.last_name)
  //   setemail(currentdata.user.email)

  // }, [])

  useEffect(() => {
    console.log(currentdata)

  }, [currentdata])

  const handleFirstname = (e) => {
    setfirstname(e.target.value)
    formik.setFieldValue("first_name", e.target.value);
  }
  const handleLastname = (e) => {
    setlastname(e.target.value)
    formik.setFieldValue("last_name", e.target.value);

  }
  const handleEmail = (e) => {
    setemail(e.target.value)
    formik.setFieldValue("email", e.target.value);

  }
  const Profil = [
    { id: 1, content: "Profil Basic", value: "Profil Basic" },
    { id: 2, content: "Profil Manager", value: "Profil Manager" },
    { id: 2, content: "Profil Custom", value: "Profil Custom" }]

  const [selectedRights, setSelectedRights] = useState(currentdata.rights.map(right => right.display));
  const [selectedProfile, setSelectedProfile] = useState();
  const handleProfileChange = (value) => {
    switch (value) {
      case "Profil Basic":
        setSelectedProfile(value);
        setSelectedRights([
          "blog",
          "signalement",
          "demande_architecte",
          "support_client",
          "reunion",
        ]);
        break;
      case "Profil Manager":
        setSelectedProfile(value);
        setSelectedRights([
          "blog",
          "demande_architecte",
          "support_client",
          "reunion",
          "parrainage",
          "profil_architecte",
          "Suivi",
        ]);
        break;
      case "Profil Custom":
        setSelectedProfile(value);
        break;
      default:
        setSelectedRights(["blog",
          "signalement",
          "demande_architecte",
          "support_client",
          "reunion",]);
    }
  };
  useEffect(
    () => {
      console.log(selectedRights)
    }, [selectedRights]
  )
  const toggleRightSelection = (rightId) => {
    setSelectedRights((prevSelectedRights) => {
      const updatedRights = prevSelectedRights.includes(rightId)
        ? prevSelectedRights.filter((id) => id !== rightId)
        : [...prevSelectedRights, rightId];
      console.log("Updated rights:", updatedRights);
      return updatedRights;
    });
  };

  if (!currentdata) {
    return <Spinner />
  }
  else {
    return (
      <div className="fixed top-0 left-0  w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <div className="text-black w-6 h-6">
              <PencilIcon />
            </div>
            <h3 className="ml-2 text-lg font-bold text-gray-900 ">
              {" "}
              Modifier Admin{" "}
            </h3>
            <button
              onClick={() => closemodi(false)}
              type="button"
              className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg  w-6 h-6 ms-auto inline-flex justify-center items-center"
            >
              <XMarkIcon />
            </button>
          </div>
          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Nom
                </label>
                <input
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  name="first_name"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-client-primary focus:border-client-primary block w-full p-2.5 "
                  placeholder="Entrer le nom"
                  required=""
                />
              </div>
              <div className=" col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-semibold text-gray-900 ">
                  Prénom
                </label>
                <input

                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  name="last_name"
                  type="text"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-client-primary focus:border-client-primary block w-full p-2.5 "
                  placeholder="Entrer le prénom"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-semibold text-gray-900 ">
                  Email
                </label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-client-primary focus:border-client-primary block w-full p-2.5 "
                  placeholder="Entrer l'email"
                  required=""
                />
              </div>
              <div className="col-span-2">

                <CustomSelect
                  options={Profil}
                  label="Profil"
                  containerClassName=""
                  value={selectedProfile}
                  onChange={(value) => {
                    handleProfileChange(value)
                    formik.handleChange
                  }}
                  name="Profil"
                />
              </div>

              {selectedProfile === "Profil Custom" && (
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-semibold text-gray-900 ">
                    Permissions
                  </label>{" "}
                  <div className="grid grid-cols-2 ">
                    <div className="flex flex-rows  items-center">
                      <Checkbox
                        color="blue"
                        onChange={() => toggleRightSelection("annouce")}
                        checked={selectedRights.includes("annouce")}
                      />
                      <label className="text-sm">Annoce</label>
                    </div>
                    <div className="flex flex-row items-center">
                      <Checkbox
                        color="red"
                        onChange={() => toggleRightSelection("blog")}
                        checked={selectedRights.includes("blog")}
                      />
                      <label className="text-sm">Blog</label>
                    </div>
                    <div className="flex flex-row items-center">
                      <Checkbox
                        color="green"
                        onChange={() =>
                          toggleRightSelection("demande_architecte")
                        }
                        checked={selectedRights.includes("demande_architecte")}
                      />
                      <label className="text-sm">Demande Architecte</label>
                    </div>
                    <div className="flex flex-row items-center">
                      <Checkbox
                        color="amber"
                        onChange={() => toggleRightSelection("support_client")}
                        checked={selectedRights.includes("support_client")}
                      />
                      <label className="text-sm">Support Client</label>
                    </div>
                    <div className="flex flex-row items-center">
                      <Checkbox
                        color="teal"
                        onChange={() => toggleRightSelection("paiement")}
                        checked={selectedRights.includes("paiement")}
                      />
                      <label className="text-sm">Paiement</label>
                    </div>
                    <div className="flex flex-row items-center">
                      <Checkbox
                        color="indigo"
                        onChange={() => toggleRightSelection("parrainage")}
                        checked={selectedRights.includes("parrainage")}
                      />
                      <label className="text-sm">Parrainage</label>
                    </div>
                    <div className="flex flex-row items-center">
                      <Checkbox
                        color="purple"
                        onChange={() => toggleRightSelection("profil_architecte")}
                        checked={selectedRights.includes("profil_architecte")}
                      />
                      <label className="text-sm">Profil Architecte</label>
                    </div>
                    <div className=" flex flex-row items-center">
                      <Checkbox
                        color="pink"
                        onChange={() => toggleRightSelection("reunion")}
                        checked={selectedRights.includes("reunion")}
                      />
                      <label className="text-sm">Reunion</label>
                    </div>
                    <div className="flex flex-row items-center">
                      <Checkbox
                        color="orange"
                        onChange={() => toggleRightSelection("suivi")}
                        checked={selectedRights.includes("suivi")}
                      />
                      <label className="text-sm">Suivi</label>
                    </div>
                    <div className="flex flex-row items-center">
                      <Checkbox
                        color="brown"
                        onChange={() => toggleRightSelection("signalement")}
                        checked={selectedRights.includes("signalement")}
                      />
                      <label className="text-sm">Signalement</label>
                    </div>
                  </div>{" "}
                </div>
              )}
            </div>
            <button
              type="submit"
              onClick={formik.handleSubmit}
              className="text-white bg-client-primary w-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Modifier{" "}
            </button>
          </form>
        </div>
      </div>
    );
  };
}


export default ModiForm;
