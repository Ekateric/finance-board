const getClassString = (defaultClassName, subClass) => {
  let className = defaultClassName;

  if (subClass) {
    if (typeof subClass === 'string') {
      subClass = [subClass];
    }

    const subClassName = subClass.map((subClass) => {
      return `${defaultClassName}_${subClass}`;
    })
    .join(' ');

    className = `${className} ${subClassName}`
  }

  return className;
};

export default getClassString;
