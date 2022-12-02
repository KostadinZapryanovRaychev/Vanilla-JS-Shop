// functions should be small

//function should perform only one action
//do one thing

//functions should be pure - same input - same output vseki put kato slojish parametar izkarva sashtiq resultat
// funkcii s math random sa impure

function renderContent(renderInformation) {
  const element = renderInformation.element;
  const rootElement = renderInformation.root;

  validateElementType(element);

  const content = createRenderableContent(renderInformation);

  renderOnRoot(rootElement, content);
}

function validateElementType(element) {
  if (element === 'script' || element === 'SCRIPT') {
    throw new Error('Invalid element.');
  }
}

function createRenderableContent(renderInformation) {
  const tags = createTags(
    renderInformation.element,
    renderInformation.attributes
  );
  const template = tags.opening + renderInformation.content + tags.closing;
  return template;
}

function renderOnRoot(root, template) {
  root.innerHTML = template;
}

function createTags(element, attributes) {
  const attributeList = generateAttributesList(attributes);
  const openingTag = buildTag({
    element: element,
    attributes: attributeList,
    isOpening: true,
  });
  const closingTag = buildTag({
    element: element,
    isOpening: false,
  });

  return { opening: openingTag, closing: closingTag };
}

function generateAttributesList(attributes) {
  let attributeList = '';
  for (const attribute of attributes) {
    attributeList = `${attributeList} ${attribute.name}="${attribute.value}"`;
  }

  return attributeList;
}

function buildTag(tagInformation) {
  const element = tagInformation.element;
  const attributes = tagInformation.attributes;
  const isOpeningTag = tagInformation.isOpening;

  let tag;
  if (isOpeningTag) {
    tag = '<' + element + attributes + '>';
  } else {
    tag = '</' + element + '>';
  }

  return tag;
}




//data immutable structure
//refferentianly transperent funkciq

// IT ALL DEPENDS ON THE LEVEL OF ABSTRACTION

function createUser(email, password) {
  try {
    setupUser(email, password);
  } catch (error) {
    handleError(error);
  }
}

function setupUser(email, password) {
  validateUserData(email, password);

  const user = buildUser(email, password);

  saveUserToDatabase(user);
}

function validateUserData(email, password) {
  if (!userDataIsValid(email, password)) {
    throw new Error('Invalid input!');
  }
}

function userDataIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes('@');
}

function passwordIsValid(password) {
  return password && password.trim() !== '';
}

function buildUser(email, password) {
  return {
    email: email,
    password: password,
  };
}

function saveUserToDatabase(user) {
  database.insert(user);
}

function handleError(error) {
  console.log(error.message);
}



function hasMonkeyA() {
  let userInput = prompt("Please insert your email");
  if (userInput.includes("@")) {
    return true;
  } else {
    return false;
  }
};

function validateEmail() {
  const validationResult = hasMonkeyA();
  if (validationResult) {
    alert("Please proceed with registration");
  } else {
    alert("Please insert a valid email");
  }
}