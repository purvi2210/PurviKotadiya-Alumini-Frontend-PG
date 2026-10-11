
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const colors = darkMode
    ? {
        bg: "#080B10",
        card: "#111720",
        text: "#F4F7FA",
        muted: "#A0AAB8",
        accent: "#63F5D0",
        border: "#252F3B",
        secondary: "#B8A0FF",
      }
    : {
        bg: "#F7F9FC",
        card: "#FFFFFF",
        text: "#111827",
        muted: "#657184",
        accent: "#079E83",
        border: "#E0E6EE",
        secondary: "#7857D9",
      };

  const styles = makeStyles(colors);

  const projects = [
    {
      number: "01",
      name: "AI Resume Builder",
      description:
        "A web application to create professional resumes and generate downloadable PDF documents.",
      tags: "PHP  •  MySQL  •  HTML  •  CSS",
    },
    {
      number: "02",
      name: "QuickRide",
      description:
        "A vehicle rental website with a clean interface and a simple booking experience.",
      tags: "HTML  •  CSS  •  JavaScript",
    },
    {
      number: "03",
      name: "LMS Platform",
      description:
        "A learning management system project currently in development.",
      tags: "Web Development  •  Learning",
    },
  ];

  const SectionTitle = ({ number, title }) => (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionNumber}>{number}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        barStyle={darkMode ? "light-content" : "dark-content"}
        backgroundColor={colors.bg}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.navbar}>
          <Text style={styles.logo}>
            PK<Text style={styles.accent}>.</Text>
          </Text>

          <TouchableOpacity
            style={styles.themeButton}
            onPress={() => setDarkMode(!darkMode)}
            activeOpacity={0.75}
          >
            <Text style={styles.themeButtonText}>
              {darkMode ? "☀  Light" : "☾  Dark"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <View style={styles.availability}>
            <View style={styles.statusDot} />
            <Text style={styles.availabilityText}>
              AVAILABLE TO LEARN & COLLABORATE
            </Text>
          </View>

          <Text style={styles.eyebrow}>HELLO, I'M</Text>
          <Text style={styles.heroName}>Purvi</Text>
          <Text style={styles.heroSurname}>Kotadiya.</Text>

          <Text style={styles.heroRole}>
            Developer in the making{" "}
            <Text style={styles.accentText}>✳</Text>
          </Text>

          <Text style={styles.heroDescription}>
            I enjoy building meaningful digital experiences, exploring new
            technologies, and turning ideas into practical projects.
          </Text>

          <View style={styles.heroActions}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => {}}
            >
              <Text style={styles.primaryButtonText}>Explore my work ↗</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.heroFooter}>
            <Text style={styles.mutedText}>BASED IN INDIA</Text>
            <Text style={styles.mutedText}>SCROLL TO EXPLORE ↓</Text>
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle number="01 /" title="About me" />
          <View style={styles.card}>
            <Text style={styles.cardHeading}>
              Curious mind.{"\n"}
              <Text style={styles.accentText}>Creative builder.</Text>
            </Text>
            <Text style={styles.bodyText}>
              I'm a computer applications graduate interested in software
              development and modern web technologies. I like learning by
              building projects, solving problems, and improving my skills
              step by step.
            </Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>FOCUS</Text>
              <Text style={styles.infoValue}>Development & Learning</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>LOCATION</Text>
              <Text style={styles.infoValue}>India</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle number="02 /" title="Tech stack" />
          <Text style={styles.sectionDescription}>
            Technologies I'm learning and working with.
          </Text>
          <View style={styles.skillsGrid}>
            {["HTML5", "CSS3", "JavaScript", "PHP", "C++", "MySQL", "Git", "React Native"].map(
              (skill) => (
                <View key={skill} style={styles.skillChip}>
                  <View style={styles.skillDot} />
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              )
            )}
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle number="03 /" title="Selected work" />
          <Text style={styles.sectionDescription}>
            A few projects from my development journey.
          </Text>

          {projects.map((project) => (
            <View key={project.number} style={styles.projectCard}>
              <View style={styles.projectTop}>
                <Text style={styles.projectNumber}>{project.number}</Text>
                <Text style={styles.projectArrow}>↗</Text>
              </View>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.bodyText}>{project.description}</Text>
              <View style={styles.projectDivider} />
              <Text style={styles.projectTags}>{project.tags}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle number="04 /" title="Experience" />
          <View style={styles.card}>
            <Text style={styles.projectName}>My learning journey</Text>
            <Text style={styles.bodyText}>
              Building practical skills through personal projects, coursework,
              and exploring new development tools.
            </Text>
            <Text style={styles.projectTags}>CONTINUOUS LEARNING</Text>
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle number="05 /" title="Certifications" />
          <View style={styles.card}>
            <Text style={styles.projectName}>More to come ✳</Text>
            <Text style={styles.bodyText}>
              Certifications and completed courses can be added here as you
              progress.
            </Text>
          </View>
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.eyebrow}>HAVE A PROJECT IN MIND?</Text>
          <Text style={styles.contactTitle}>Let's create</Text>
          <Text style={styles.contactAccent}>something great.</Text>
          <Text style={styles.bodyText}>
            I'm always interested in learning, sharing ideas, and collaborating
            on projects.
          </Text>
          <View style={styles.contactCard}>
            <Text style={styles.infoLabel}>GET IN TOUCH</Text>
            <Text style={styles.contactHint}>
              Add your email and professional links here.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.logo}>
            PK<Text style={styles.accent}>.</Text>
          </Text>
          <Text style={styles.mutedText}>DESIGNED & BUILT WITH CARE</Text>
          <Text style={styles.mutedText}>© 2026 PURVI KOTADIYA</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function makeStyles(c) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: c.bg },
    container: {
      paddingHorizontal: 22,
      paddingBottom: 36,
      maxWidth: 760,
      width: "100%",
      alignSelf: "center",
    },
    navbar: {
      minHeight: 76,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: c.border,
    },
    logo: { fontSize: 26, fontWeight: "900", color: c.text, letterSpacing: -1 },
    accent: { color: c.accent },
    accentText: { color: c.accent },
    themeButton: {
      borderWidth: 1,
      borderColor: c.border,
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 24,
    },
    themeButtonText: { color: c.text, fontSize: 13, fontWeight: "600" },
    hero: { paddingTop: 62, paddingBottom: 38 },
    availability: {
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: 20,
      paddingHorizontal: 12,
      paddingVertical: 9,
      marginBottom: 38,
    },
    statusDot: {
      width: 7,
      height: 7,
      borderRadius: 4,
      backgroundColor: c.accent,
      marginRight: 9,
    },
    availabilityText: {
      color: c.muted,
      fontSize: 9,
      fontWeight: "700",
      letterSpacing: 1,
    },
    eyebrow: {
      color: c.accent,
      fontSize: 12,
      fontWeight: "800",
      letterSpacing: 3,
      marginBottom: 12,
    },
    heroName: {
      fontSize: 56,
      lineHeight: 62,
      fontWeight: "900",
      letterSpacing: -2,
      color: c.text,
    },
    heroSurname: {
      fontSize: 56,
      lineHeight: 64,
      fontWeight: "900",
      letterSpacing: -2,
      color: c.accent,
    },
    heroRole: {
      fontSize: 19,
      fontWeight: "600",
      color: c.text,
      marginTop: 22,
    },
    heroDescription: {
      fontSize: 15,
      lineHeight: 25,
      color: c.muted,
      marginTop: 18,
      maxWidth: 500,
    },
    heroActions: { flexDirection: "row", marginTop: 28 },
    primaryButton: {
      backgroundColor: c.accent,
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 8,
    },
    primaryButtonText: { color: "#07110F", fontSize: 14, fontWeight: "800" },
    heroFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 52,
      paddingTop: 18,
      borderTopWidth: 1,
      borderTopColor: c.border,
    },
    mutedText: {
      color: c.muted,
      fontSize: 9,
      fontWeight: "700",
      letterSpacing: 1,
    },
    section: { paddingTop: 38, paddingBottom: 24 },
    sectionHeading: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 22,
    },
    sectionNumber: {
      color: c.accent,
      fontSize: 12,
      fontWeight: "800",
      marginRight: 12,
    },
    sectionTitle: {
      color: c.text,
      fontSize: 26,
      fontWeight: "800",
      letterSpacing: -0.5,
    },
    sectionDescription: {
      color: c.muted,
      fontSize: 14,
      lineHeight: 22,
      marginTop: -8,
      marginBottom: 20,
    },
    card: {
      backgroundColor: c.card,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: 14,
      padding: 22,
    },
    cardHeading: {
      color: c.text,
      fontSize: 27,
      lineHeight: 36,
      fontWeight: "800",
      marginBottom: 15,
    },
    bodyText: {
      color: c.muted,
      fontSize: 14,
      lineHeight: 23,
      marginTop: 10,
    },
    infoRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 22,
      paddingTop: 15,
      borderTopWidth: 1,
      borderTopColor: c.border,
    },
    infoLabel: {
      color: c.muted,
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 1.5,
    },
    infoValue: { color: c.text, fontSize: 12, fontWeight: "600" },
    skillsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
    },
    skillChip: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: c.card,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: 8,
      paddingHorizontal: 14,
      paddingVertical: 13,
    },
    skillDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: c.accent,
      marginRight: 9,
    },
    skillText: { color: c.text, fontSize: 12, fontWeight: "600" },
    projectCard: {
      backgroundColor: c.card,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: 14,
      padding: 21,
      marginBottom: 14,
    },
    projectTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    projectNumber: { color: c.accent, fontSize: 12, fontWeight: "800" },
    projectArrow: { color: c.accent, fontSize: 23 },
    projectName: {
      color: c.text,
      fontSize: 19,
      fontWeight: "800",
      marginTop: 18,
    },
    projectDivider: {
      height: 1,
      backgroundColor: c.border,
      marginTop: 20,
      marginBottom: 14,
    },
    projectTags: {
      color: c.secondary,
      fontSize: 10,
      fontWeight: "700",
      letterSpacing: 0.5,
      marginTop: 15,
    },
    contactSection: {
      paddingTop: 55,
      paddingBottom: 35,
      borderTopWidth: 1,
      borderTopColor: c.border,
      marginTop: 28,
    },
    contactTitle: {
      color: c.text,
      fontSize: 42,
      fontWeight: "900",
      letterSpacing: -1.5,
    },
    contactAccent: {
      color: c.accent,
      fontSize: 36,
      fontWeight: "900",
      letterSpacing: -1,
    },
    contactCard: {
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: 12,
      padding: 18,
      marginTop: 24,
      backgroundColor: c.card,
    },
    contactHint: { color: c.muted, fontSize: 13, marginTop: 12 },
    footer: {
      borderTopWidth: 1,
      borderTopColor: c.border,
      paddingTop: 22,
      gap: 13,
      alignItems: "flex-start",
    },
  });
}
