import { useForm, Controller } from "react-hook-form";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.main}>
      <Stack.Screen options={{ title: "Sign in" }} />
      <View style={styles.form}>
        <Text style={styles.Heading}>Login Form</Text>
        <Text style={styles.welcome}>Welcome Back</Text>

        {/* Email Field */}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text>Email</Text>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your email"
              />
            </View>
          )}
          name="email"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.email && <Text style={styles.error}>Email is required.</Text>}

        {/* Password Field */}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text>Password</Text>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.password && (
          <Text style={styles.error}>Password is required.</Text>
        )}

        {/* Submit Button */}
        <Pressable>
          <Text style={styles.submit} onPress={handleSubmit(onSubmit)}>
            Submit
          </Text>
        </Pressable>
        <Text
          style={{ color: "#215cd1", opacity: 0.8, borderBottomColor: "black" }}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          Are You New there Register Here
        </Text>
        <Text style={{ fontSize: 33, textAlign: "center", opacity: 0.8 }}>
          OR
        </Text>
        <View style={styles.social}>
          <Pressable>
            <Text style={styles.auth}>Google</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.auth}>Facebook</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    width: "87%",
    gap: 12,
  },
  Heading: {
    textAlign: "center",
    fontSize: 36,
  },
  welcome: {
    fontSize: 15,
    opacity: 0.6,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
  submit: {
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    fontSize: 22,
    padding: 4,
    borderRadius: 4,
  },
  social: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    width: "100%",
    justifyContent: "space-around",
  },
  auth: {
    padding: 4,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 22,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    width: "auto",
  },
});
