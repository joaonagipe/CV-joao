import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/jv.jpg")} style={styles.image} />
      <Text style={styles.header}>João Victor Nagipe da Fonseca </Text>
      <Text style={styles.subheader}>
        Análise e desenvolmento de Sistemas 
      </Text>
      <Text style={styles.subheader}>
        Objetivo
      </Text>
      <Text style={styles.paragraph}>
      Busco desenvolver minha carreira na área de Análise e Desenvolvimento de Sistemas, aplicando meu conhecimento acadêmico e habilidades técnicas na criação e manutenção de soluções inovadoras. Tenho interesse em participar de projetos desafiadores que me permitam aprender e crescer profissionalmente, contribuindo para o sucesso da equipe e da organização.
      </Text>
      <Text style={styles.subheader}>
        Habilidades
      </Text>
      <Text style={styles.listItem}>
        • Soft Skills: Criatividade, Comunicação, Trabalho em Equipe.
      </Text>
      <Text style={styles.listItem}>
        • Hard Skills: HTML5, CSS3, JS, BD.
      </Text>
      
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Datamétrica| Início: Abril 2024 - Atual 
      </Text>
      
      <Text style={styles.paragraph}>
        • Operador de Telemarketing
        • Atendimento ao Cliente
        • Resolução de Problemas
      </Text>
      
     
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.subheader}>
        Escola de Aplicação do Recife
      </Text>
      <Text style={styles.paragraph}>
        Ensino Médio Completo - 2019
      </Text>
      <Text style={styles.subheader}>
        Anásile e desenvolmento de Sistemas
      </Text>
      <Text style={styles.paragraph}>
        Faculdade Senac Pernambuco | Início: Março 2023 - Atual 
      </Text>
      <Text style={styles.subheader}>
      Instituto Aliança Com o Adolescente
      </Text>
      <Text style={styles.paragraph}>
      Programa Escola Social do Varejo, Formação para o Mercado de Trabalho na área de: Desenvolviment Pessoal e Social (EAD) - 150h Contexto das Relações do Varejo - 90h Tecnologia da Informação e Comunicação - 90h
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: "#a6a6a6",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Experiência" component={ExperienceScreen} />
        <Tab.Screen name="Educação" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "##E0D0FF",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#1C0052",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#008080",
    alignSelf: "center",
    marginBottom: 20,
  },
});
