const receivesAFunction = (firstclass) => {
    if (typeof firstclass == 'function') {
      firstclass(); 
    } else {
      new Error('Parameter must be a function');
    }
  };

  const returnsANamedFunction = () => {
    function functionNamed() {
    }

    return functionNamed;
  };


  const returnsAnAnonymousFunction = () => {
  
    return function() {

    };
  };
  