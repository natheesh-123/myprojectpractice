import React from 'react'

function InternalCssA() {

    const headingStyle = {
        color: 'blue',
        fontSize: '24px',
        textAlign: 'center',
    };
    return (
        <div>
                
                <h1 style={headingStyle}>Internal CSS in React</h1>
               
                <p style={{ color: 'gray', fontSize: '18px' }}>This is styled using inline CSS.</p>  {/* Inline Styles in JSX */}
        </div>
    )
}

export default InternalCssA;



//The headingStyle object is passed to the style attribute to apply the styles to the <h1> element.
/*
headingStyle is a JavaScript object.
It is defined using the const keyword, which means it is a constant reference to an object.
The object contains key-value pairs,
where:
-Keys are the CSS property names in camelCase.
-Values are the corresponding CSS property values.
*/

/*
-headingStyle is a JavaScript object because it uses the object literal syntax { key: value, ... }

If you didn't use the headingStyle object, you could write the styles directly as an inline object:

    <h1 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
    Internal CSS in React
    </h1>

*/

/*
==>Inline Definition of the Style Object
You can also define the JavaScript object inline within the style attribute, without using a separate variable.

Example from your code:

<p style={{ color: 'gray', fontSize: '18px' }}>This is styled using inline CSS.</p>
Here:

    -{ color: 'gray', fontSize: '18px' } is the style object created directly inside the style attribute.
    -It applies the color and fontSize styles to the <p> element.
*/