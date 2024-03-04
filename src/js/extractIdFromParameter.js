function extractIdFromParameter(parameter) {
    // Using regular expression to extract the ID part
    const match = parameter.match(/\/posts\/(.+)/);

    if (match) {
        return match[1];
    } else {
        return null;
    }
}

export default extractIdFromParameter;
