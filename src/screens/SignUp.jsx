import { Formik } from 'formik';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import * as yup from 'yup';
export default function SignUpScreen({ navigation, ...others }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = email => {
    // Simple email regex
    const re =
      /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const onSignUp = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // TODO: add sign up logic
    others.setSignedIn(true);
  };
  let userSchema = yup.object().shape({
    email: yup.string().email().required(),
    pass: yup.string().min(6, 'less than 6').required(),
    confirm: yup
      .string()
      .oneOf([yup.ref('pass')], 'not matching')
      .required(),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Formik
        validationSchema={userSchema}
        initialValues={{ email: '', password: '', confirm: '' }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && <Text>{errors.email}email error</Text>}
            <TextInput
              placeholder="pass"
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.pass && <Text>{errors.pass}pass error</Text>}
            <TextInput
              placeholder="confirm"
              style={styles.input}
              onChangeText={handleChange('confirm')}
              onBlur={handleBlur('confirm')}
              value={values.confirm}
            />
            {errors.confirm && <Text>{errors.confirm} confirm error</Text>}
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>

      <Button title="Sign Up" onPress={onSignUp} />
      <Text style={styles.loginLink} onPress={() => navigation.goBack()}>
        Already have an account? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  error: { color: 'red', marginBottom: 10, textAlign: 'center' },
  loginLink: { color: '#007bff', marginTop: 20, textAlign: 'center' },
});
