function controlNum(name, value, object) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    var txt = document.createTextNode(name);

    label.setAttribute("for", name);
    input.setAttribute("id", name);
    input.setAttribute("value", value);
    input.setAttribute("type", "number");

    input.addEventListener("input", function () {
        object[name] = parseFloat(this.value, 10);
    });

    label.appendChild(txt);
    label.appendChild(input);

    return label;
}

function controlString(name, value, object) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    var txt = document.createTextNode(name);

    label.setAttribute("for", name);
    input.setAttribute("id", name);
    input.setAttribute("value", value);

    input.addEventListener("input", function () {
        object[name] = this.value;
    });

    label.appendChild(txt);
    label.appendChild(input);

    return label;
}

/**
 * Creates a form with input elements which bind to a given json object
 *
 * ex, controlsFromJson({apples: 5, name: "fruits"})
 *
 * would generate an HTMLElement somewhat like
 * <form>
 *     <label for="apples">apples</label><input id="apples" type="number" value="5"/>
 *     <label for="name">name</label><input id="name" value="fruits"/>
 * </form>
 *
 * When any of these input elements get changed, the passed json object gets mutated as well.
 *
 * @return HTMLElement Append this element with the controls somewhere to your document
 */
function controlsFromJson(object) {
    var form = document.createElement("form");

    Object.keys(object).forEach(function (key) {
        var value = object[key];

        var element;

        if (value !== null && value !== undefined) {
            switch (typeof value) {
                case "number":
                    element = controlString(key, value, object);
                    break;
                // todo, add other types if necessary
                // string, bool
            }
        }

        form.appendChild(element);
    });

    return form;
}
