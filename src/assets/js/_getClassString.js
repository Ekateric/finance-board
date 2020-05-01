const getClassString = (defaultClassName, subClass) => {
  let className = defaultClassName;

  if (subClass) {
    if (typeof subClass === 'string') {
      className = `${className} ${defaultClassName}__${subClass}`
    
    } else {
        const subClassName = subClass.map((subClass) => {
          return `${defaultClassName}__${subClass}`;
        })
        .join(' ');

        className = `${className} ${subClassName}`;
    }
  }

  return className;
};

export default getClassString;
