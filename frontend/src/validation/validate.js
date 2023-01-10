const MIN_LENGTH_REGEX = /^([0-9a-zA-Z\.\-\"\'\s]{6,})$/;
const MIN_LENGTH_OVERVIEW_REGEX = /^([A-Z0-9a-z\.\&\-\"\'\:\;\,\s]{50,})$/;

export const minLength = (value) => {
    let errorMessage = "";

    if (value === "" || value === undefined) {
        errorMessage = "Field is required";
    } else if (!MIN_LENGTH_REGEX.test(value)) {
        errorMessage = "Too short, minimum 6 letters";
    }

    return errorMessage;
};

export const minOverviewLength = (value) => {
    let errorMessage = "";

    if (value === "" || value === undefined) {
        errorMessage = "Field is required";
    } else if (!MIN_LENGTH_OVERVIEW_REGEX.test(value)) {
        errorMessage = "Too short, minimum 50 letters";
    }

    return errorMessage;
};

/*id
author
name
overview*/
