import * as actions from "../actions/contact-data";
import validateInput from "../../util/validation";

const INITIAL_STATE = {
  formData: {
    name: {
      valid: false,
      value: "",
    },
    email: {
      valid: false,
      value: "",
    },
    street: {
      valid: false,
      value: "",
    },
    postalCode: {
      valid: false,
      value: "",
    },
    num: {
      valid: false,
      value: "",
    },
    deliveryOption: { value: "Slower=0.6", valid: true },
    finalTotal: { value: 0, valid: true },
  },
  orderLoading: false,
  success: null,
  modal: false,
};

function updateFormData(store, newField) {
  return {
    ...store,
    formData: {
      ...store.formData,
      ...newField,
    },
  };
}

const reducer = (store = INITIAL_STATE, action) => {
  if (action.type === actions.GET_CONTACT_DELIVERY_OPT) {
    const del_opt = action.value;
    const tax = del_opt.split("=")[1];
    console.log(action.finalTotal, Number(tax));
    console.log(action);
    const newField = {
      deliveryOption: {
        ...store.deliveryOption,
        value: del_opt,
        valid: action.valid,
      },
      finalTotal: {
        ...store.finalTotal,
        value: action.finalTotal + Number(tax),
        valid: true,
      },
    };
    return updateFormData(store, newField);
  }

  if (action.type === actions.GET_CONTACT_NAME) {
    const name = action.name;
    const newField = {
      name: {
        ...store.name,
        value: action.name,
        valid: validateInput(name, { minLen: 2 }),
      },
    };
    return updateFormData(store, newField);
  }

  if (action.type === actions.GET_CONTACT_EMAIL) {
    const email = action.email;
    const newField = {
      email: {
        ...store.email,
        value: action.email,
        valid: validateInput(email, { email: true }),
      },
    };
    return updateFormData(store, newField);
  }

  if (action.type === actions.GET_CONTACT_STREET) {
    const street = action.street;
    const newField = {
      street: {
        ...store.street,
        value: action.street,
        valid: validateInput(street, { minLen: 3 }),
      },
    };
    return updateFormData(store, newField);
  }

  if (action.type === actions.GET_CONTACT_NUM) {
    const num = action.num;
    const newField = {
      num: {
        ...store.num,
        value: action.num,
        valid: validateInput(num, { minLen: 0 }),
      },
    };
    return updateFormData(store, newField);
  }
  if (action.type === actions.GET_CONTACT_POSTAL) {
    const postal = action.postalCode;
    const isValid = postal.trim().length !== 8 ? false : true;
    const newField = {
      postalCode: {
        ...store.postalCode,
        value: action.postalCode,
        valid: isValid,
      },
    };
    return updateFormData(store, newField);
  }

  if (action.type === "ORDER_ONGOING") {
    return {
      ...store,
      orderLoading: action.value,
      modal: action.modal,
    };
  }

  if (action.type === "ORDER_STATUS") {
    return {
      ...store,
      success: action.status,
    };
  }
  if (action.type === "RESET_STATE") {
    return {
      ...INITIAL_STATE,
    };
  }

  return store;
};

export default reducer;
