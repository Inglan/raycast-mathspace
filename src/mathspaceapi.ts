import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  cookie: string;
  csrftoken: string;
}

export type ViewerProviderQueryType = {
  data: {
    viewer: {
      avatar: string;
      cohortType: string;
      country: {
        code: string;
        id: string;
      };
      syllabusFocus: {
        id: string;
        pk: number;
        textbookType: string;
      };
      id: string;
      userType: string;
      pk: number;
      firstName: string;
      lastName: string;
      email: string;
      createdAt: string;
      aiAccess: string;
      userPreference: {
        hasClosedHelpChatSidebar: boolean;
        hasDismissedOpenPromptPremiumDiscountBanner: boolean;
        enableSpanishSupport: boolean;
        enableTTSSupport: boolean;
        hasEnabledAccessibilityMode: boolean;
        hasPreviewProblemEventDataInSkills: boolean;
        id: string;
      };
      profile: {
        __typename: string;
        id: string;
        isTeacherStudent: boolean;
        studentClasses: {
          edges: Array<{
            node: {
              id: string;
            };
          }>;
        };
        studentSchool: {
          countrySubdivision: {
            code: string;
            id: string;
          };
          id: string;
        };
        assignedTasks: Array<{
          id: string;
        }>;
        aiHintOpenPromptMonthlyLimitRemaining: number;
        leaderboardClass: {
          class: {
            id: string;
          };
        };
        __isNode: string;
      };
      accountType: string;
      featureFlags: {
        adminReports: boolean;
        advancedReports: boolean;
        allowMultipleTeachersInClass: boolean;
        assignTasksToIndividuals: boolean;
        assignableTasks: boolean;
        bulkAssignTasks: boolean;
        classicUi: boolean;
        demoCheckin: boolean;
        diagnostics: boolean;
        engageLite: boolean;
        engageTasks: boolean;
        primaryTeacherNotes: boolean;
        printableWorksheets: boolean;
        schoolReports: boolean;
        teacherReporting: boolean;
        templates: boolean;
        textbook: boolean;
        textbookOverviews: boolean;
        topicAssessment: boolean;
        unlimitedClasses: boolean;
        unlimitedOpenPrompt: boolean;
        worksheetAnswerKeys: boolean;
        worksheets: boolean;
        canEditLanternQuestions: boolean;
      };
      featureFlagsV2: {
        canAccessNewDistrictReport: boolean;
        canAccessNewDistrictReportImpact: boolean;
        canAccessNewDistrictReportSchoolLevel: boolean;
        canAccessNewDistrictReportTemplates: boolean;
        canPreviewProblemEventDataInSkills: boolean;
        catfaEnableSecondarySaveAsTemplate: boolean;
        checkinsEnableDiscoveryCheckinCapGrades: boolean;
        classSkillsReportCurriculumEnableGrowth: boolean;
        devGetProblemEventsBackgroundRequestsPerMinuteLimit: string;
        devSkillsReportEnableTimeFilter: boolean;
        enableAiOpenPrompt: boolean;
        enableAiPremiumTrial: boolean;
        enableAiSuggestQuestions: boolean;
        enableTestMode: boolean;
        gamificationEnableChallengesDaily: boolean;
        gamificationEnableInlineLeaderboardNotification: boolean;
        gamificationEnableLeaderboardClassSelectionPrompt: boolean;
        gamificationEnableLeaderboardDock: boolean;
        gamificationEnableLeaderboardModalV2: boolean;
        gamificationEnableLeaderboardNotification: boolean;
        gamificationEnableLeaderboardTab: boolean;
        gamificationEnableLiveModePromote: boolean;
        gamificationEnableMonthlyExpedition: boolean;
        gamificationEnablePointsCheckins: boolean;
        gamificationEnableQuestionSuccessBannerV2: boolean;
        gamificationEnableShop: boolean;
        gamificationEnableStudentDashboardV2: boolean;
        gamificationEnableTeacherStickers: boolean;
        gamificationEnableTugOfWar: boolean;
        gamificationEnableWeeklyPBHeader: boolean;
        gamificationHighlightStreaksInWorkbookHeader: boolean;
        globalSearchEnableMVP: boolean;
        graphqlEnableNodeResolver: boolean;
        perfUpdateIndirectMasteryAsync: boolean;
        preTopicTestCheckInCanAccess: boolean;
        printEnablePageBreaksAfterPTs: boolean;
        prototypeEnableWorksheetChat: boolean;
        reportsEnableRecommendTasks: boolean;
        showMaintenanceBanner: boolean;
        showWorkbookOnboarding: boolean;
        skillsActivityReportEnableOutcomeFilter: boolean;
        skillsActivityReportEnableSubstrandFilter: boolean;
        skillsAlchemyGradeLevelA13: boolean;
        skillsShowGradeLevelOverride: boolean;
        studentSkillsReportsEnableProblemEventData: boolean;
        supportEnableHubspotBubble: boolean;
        teacherOnboardingExperiment: string;
        topicTestsEnableMVP: boolean;
        workbookEnableDesmosCalculators: boolean;
        workbookEnableSpanishSupport: boolean;
      };
      isPartnerUser: boolean;
    };
    lantern: {
      viewer: {
        id: string;
        __typename: string;
        learningFocus: {
          id: string;
          title: string;
          strand: {
            id: string;
          };
        };
        learningFocusStatus: string;
        selfReportedGrade: {
          id: string;
          shortTitle: string;
        };
      };
    };
  };
};

export type SunflowerStudentDashboardQueryType = {
  data: {
    lantern: {
      substrand: {
        id: string;
        title: string;
        strand: {
          id: string;
        };
        studentSubtopicRecommendations: Array<{
          id: string;
          subtopic: {
            id: string;
            title: string;
            topic: {
              id: string;
              badgeUrl: string;
              syllabus: {
                id: string;
              };
            };
            hasAdaptivePractice: boolean;
            gamifiedMastery: number;
          };
          category: string;
          outcomes: Array<{
            id: string;
            title: string;
          }>;
        }>;
        badgeUrl: string;
        gradeSubstrands: Array<{
          id: string;
          gradeStrand: {
            grade: {
              id: string;
              order: number;
            };
            id: string;
          };
        }>;
        canStartCheckIn: boolean;
      };
      viewer: {
        __typename: string;
        strandStatus: {
          status: string;
          lastWorkedOnDiagnosticCheckIn: {
            id: string;
            endedAt: string;
            hasFinishedDiagnosticPhase: boolean;
          };
          strand: {
            id: string;
          };
          id: string;
        };
        id: string;
        learningFocus: {
          id: string;
          strand: {
            id: string;
          };
        };
        selfReportedGrade: {
          order: number;
          id: string;
        };
      };
    };
    viewer: {
      profile: {
        __typename: string;
        __isNode: string;
        id: string;
        __isProfile: string;
        assignedTasks: Array<{
          status: string;
          id: string;
        }>;
        gamification: {
          accessory: {
            systemId: string;
            riveFile: string;
            id: string;
          };
          id: string;
          activeChallenges: Array<{
            state: string;
            timeSpan: string;
            id: string;
            challengeTypeId: string;
            title: string;
            unitCount: number;
            unitTargetCount: number;
            rewards: {
              points: number | null;
              coins: number | null;
            };
          }>;
          coinsBalance: number;
          hasAwardedDailyCoins: boolean;
          dailyCoinAwardOptions: Array<number>;
          todaysDailyCoinAward: number;
        };
        background: {
          url: string;
          type: string;
          name: string;
          isUnlocked: boolean;
        };
        hasStartedPractice: boolean;
        upcomingTasks: Array<{
          id: string;
          type: string;
          workout: {
            __typename: string;
            id: string;
            status: string;
            problems: Array<{
              outcome: string;
              id: string;
            }>;
          };
          task: {
            __typename: string;
            id: string;
            __isTaskInterface: string;
            isAccessible: boolean;
            dueDate: string;
            title: string;
          };
          status: string;
        }>;
        overdueTasks: {
          totalCount: number;
        };
        user: {
          avatar: string;
          firstName: string;
          lastName: string;
          points: {
            current: number;
            best: number;
            bestPreviousWeekThisHalfYear: number;
          };
          id: string;
        };
        classes: {
          edges: Array<{
            node: {
              hasEnabledLeaderboard: boolean;
              displayName: string;
              id: string;
              title: string;
            };
          }>;
        };
        leaderboard: {
          currentWeek: Array<{
            points: number;
            rank: number;
            name: string;
            avatarUrl: string;
            studentId: string;
            rankDelta: number;
          }>;
          previousWeek: Array<{
            points: number;
            rank: number;
            name: string;
            avatarUrl: string;
            studentId: string;
          }>;
        };
        leaderboardClass: {
          class: {
            title: string;
            displayName: string;
            id: string;
          };
          isDefault: boolean;
        };
        studentPreference: {
          collapsedLeaderboard: boolean;
          id: string;
        };
      };
      id: string;
    };
  };
};

export async function ViewerProviderQuery() {
  const { cookie, csrftoken } = getPreferenceValues<Preferences>();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({
      query:
        "query ViewerProviderQuery {\n  viewer {\n    avatar\n    cohortType\n    country {\n      code\n      id\n    }\n    syllabusFocus {\n      id\n      pk\n      textbookType\n    }\n    id\n    userType\n    pk\n    firstName\n    lastName\n    email\n    createdAt\n    aiAccess\n    userPreference {\n      hasClosedHelpChatSidebar\n      hasDismissedOpenPromptPremiumDiscountBanner\n      enableSpanishSupport\n      enableTTSSupport\n      hasEnabledAccessibilityMode\n      hasPreviewProblemEventDataInSkills\n      id\n    }\n    profile {\n      __typename\n      ... on Teacher {\n        id\n        isHeadTeacher\n        isSchoolAdmin\n        canAccessAdminReport\n        isEmailVerified\n        __typename\n        school {\n          countrySubdivision {\n            code\n            id\n          }\n          availableSyllabuses {\n            id\n            textbookType\n          }\n          id\n        }\n        teacherPreference {\n          hasDefaultedToSkillsTab\n          id\n        }\n        aiHintOpenPromptMonthlyLimitRemaining\n      }\n      ... on Student {\n        id\n        __typename\n        isTeacherStudent\n        studentClasses: classes(first: 1) {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n        studentSchool: school {\n          countrySubdivision {\n            code\n            id\n          }\n          id\n        }\n        assignedTasks(limit: 1) {\n          id\n        }\n        aiHintOpenPromptMonthlyLimitRemaining\n        leaderboardClass {\n          class {\n            id\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    accountType\n    featureFlags: typedFeatureFlags {\n      adminReports\n      advancedReports\n      allowMultipleTeachersInClass\n      assignTasksToIndividuals\n      assignableTasks\n      bulkAssignTasks\n      classicUi\n      demoCheckin\n      diagnostics\n      engageLite\n      engageTasks\n      primaryTeacherNotes\n      printableWorksheets\n      schoolReports\n      teacherReporting\n      templates\n      textbook\n      textbookOverviews\n      topicAssessment\n      unlimitedClasses\n      unlimitedOpenPrompt\n      worksheetAnswerKeys\n      worksheets\n      canEditLanternQuestions\n    }\n    featureFlagsV2 {\n      canAccessNewDistrictReport\n      canAccessNewDistrictReportImpact\n      canAccessNewDistrictReportSchoolLevel\n      canAccessNewDistrictReportTemplates\n      canPreviewProblemEventDataInSkills\n      catfaEnableSecondarySaveAsTemplate\n      checkinsEnableDiscoveryCheckinCapGrades\n      classSkillsReportCurriculumEnableGrowth\n      devGetProblemEventsBackgroundRequestsPerMinuteLimit\n      devSkillsReportEnableTimeFilter\n      enableAiOpenPrompt\n      enableAiPremiumTrial\n      enableAiSuggestQuestions\n      enableTestMode\n      gamificationEnableChallengesDaily\n      gamificationEnableInlineLeaderboardNotification\n      gamificationEnableLeaderboardClassSelectionPrompt\n      gamificationEnableLeaderboardDock\n      gamificationEnableLeaderboardModalV2\n      gamificationEnableLeaderboardNotification\n      gamificationEnableLeaderboardTab\n      gamificationEnableLiveModePromote\n      gamificationEnableMonthlyExpedition\n      gamificationEnablePointsCheckins\n      gamificationEnableQuestionSuccessBannerV2\n      gamificationEnableShop\n      gamificationEnableStudentDashboardV2\n      gamificationEnableTeacherStickers\n      gamificationEnableTugOfWar\n      gamificationEnableWeeklyPBHeader\n      gamificationHighlightStreaksInWorkbookHeader\n      globalSearchEnableMVP\n      graphqlEnableNodeResolver\n      perfUpdateIndirectMasteryAsync\n      preTopicTestCheckInCanAccess\n      printEnablePageBreaksAfterPTs\n      prototypeEnableWorksheetChat\n      reportsEnableRecommendTasks\n      showMaintenanceBanner\n      showWorkbookOnboarding\n      skillsActivityReportEnableOutcomeFilter\n      skillsActivityReportEnableSubstrandFilter\n      skillsAlchemyGradeLevelA13\n      skillsShowGradeLevelOverride\n      studentSkillsReportsEnableProblemEventData\n      supportEnableHubspotBubble\n      teacherOnboardingExperiment\n      topicTestsEnableMVP\n      workbookEnableDesmosCalculators\n      workbookEnableSpanishSupport\n    }\n    isPartnerUser\n  }\n  lantern {\n    viewer {\n      id\n      __typename\n      ... on LanternStudent {\n        learningFocus {\n          id\n          title\n          strand {\n            id\n          }\n        }\n        learningFocusStatus\n        selfReportedGrade {\n          id\n          shortTitle\n        }\n      }\n    }\n  }\n}\n",
      operationName: "ViewerProviderQuery",
      variables: {},
    }),
  };

  const result = await fetch("https://mathspace.co/graphql/public/", options);
  return (await result.json()) as ViewerProviderQueryType;
}

export async function SunflowerStudentDashboardQuery(viewerProviderQueryResponse?: ViewerProviderQueryType | null) {
  if (viewerProviderQueryResponse == null) {
    viewerProviderQueryResponse = await ViewerProviderQuery();
  }
  const { cookie, csrftoken } = getPreferenceValues<Preferences>();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({
      query:
        "query SunflowerStudentDashboardQuery(\n  $now: DateTime!\n  $hasEnabledAccessibilityMode: Boolean!\n  $dueAfter: DateTime\n  $isLearningFocusSet: Boolean!\n  $strandId: ID!\n  $substrandId: ID!\n  $numberOfClasses: Int!\n  $classId: ID\n  $enableClassSelectionPrompt: Boolean!\n  $hasLeaderboardDockEnabled: Boolean!\n  $fetchLeaderboardModalData: Boolean!\n  $enableShop: Boolean!\n) {\n  ...StudentSkillsMapSubstrandRecommendationsFragment @include(if: $isLearningFocusSet)\n  viewer {\n    ...HiddenNonAccessibleTasksLabelFragment\n    profile {\n      __typename\n      ...SunflowerStudentDashboardHeaderWithNoLearningFocus_profile\n      ... on Student {\n        id @include(if: $hasEnabledAccessibilityMode)\n        background {\n          url\n          type\n          name\n          isUnlocked\n        }\n        assignedTasks(dueAfter: $now, excludeEnded: true, limit: 1) {\n          id\n        }\n        ...TeacherRecognitionNotification_student\n        hasStartedPractice\n        ...AssignedTasksFragment\n        ...CustomMilo_student\n        ...Leaderboard_student_2EyqOV\n        ...LeaderboardModal_student_5N7ZT\n        ...LeaderboardDock_student_yQGy8\n        ...StudentDashboardV2Content_student_3EoIab\n        ...LeaderboardClassSelectionModal_student_1MWt7w @include(if: $enableClassSelectionPrompt)\n        ...ChallengesModalBody_student\n        ...ChallengesDebugger_student\n        ...SunflowerStudentDashboardHeader_student_2S09y7\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n      ... on Teacher {\n        id\n      }\n    }\n    id\n  }\n  lantern {\n    ...SunflowerStudentDashboardHeader_lantern_1v0x6m\n    viewer {\n      __typename\n      ... on LanternStudent {\n        learningFocus {\n          id\n          strand {\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment AssignedTaskCard_assignedTask on AssignedTask {\n  id\n  type\n  status\n  task {\n    __typename\n    __isTaskInterface: __typename\n    ... on CustomTask {\n      id\n      isAccessible\n      dueDate\n      title\n    }\n    ... on TestModeCustomTask {\n      id\n      startDate\n      dueDate\n      isAccessible\n      title\n    }\n    ... on LessonTask {\n      subtopic: areaOfStudy {\n        topic {\n          badgeUrl\n          badgeBackground\n          id\n          syllabus {\n            id\n          }\n        }\n        id\n      }\n      isAccessible\n      title\n      dueDate\n    }\n    ... on WorksheetTask {\n      subtopic: areaOfStudy {\n        topic {\n          badgeUrl\n          badgeBackground\n          id\n          syllabus {\n            id\n          }\n        }\n        id\n      }\n      title\n      dueDate\n      isAccessible\n    }\n    ... on NewAdaptiveExperienceTask {\n      subtopic: areaOfStudy {\n        topic {\n          badgeUrl\n          badgeBackground\n          id\n        }\n        id\n      }\n      id\n      isAccessible\n      dueDate\n      title\n    }\n    ... on AdaptiveTask {\n      subtopic: areaOfStudy {\n        topic {\n          badgeUrl\n          badgeBackground\n          id\n        }\n        id\n      }\n      title\n      isAccessible\n      dueDate\n    }\n    ... on EngageTask {\n      subtopic: areaOfStudy {\n        topic {\n          badgeUrl\n          badgeBackground\n          id\n        }\n        id\n      }\n      title\n      isAccessible\n      dueDate\n    }\n    ... on CheckInTask {\n      strand: areaOfStudy {\n        __typename\n        id\n        title\n      }\n      title\n      isAccessible\n      dueDate\n    }\n    ... on PreTopicTestCheckInTask {\n      topic: areaOfStudy {\n        id\n        badgeUrl\n        badgeBackground\n      }\n      id\n      title\n      isAccessible\n      dueDate\n    }\n    id\n  }\n  workout {\n    __typename\n    ... on AdaptiveWorkout {\n      id\n      status\n      gamifiedMastery\n    }\n    ... on NewAdaptiveExperienceWorkout {\n      id\n      status\n      gamifiedMastery\n    }\n    ... on CustomWorkout {\n      id\n      status\n      problems {\n        outcome\n        id\n      }\n      percentDisplay\n    }\n    ... on EngageWorkout {\n      id\n      status\n    }\n    ... on CheckIn {\n      id\n      status\n      numberOfQuestions\n      questionsCompleted\n    }\n    ... on PreTopicTestWorkout {\n      id\n      status\n      checkIn: lanternCheckIn {\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment AssignedTasksFragment on Student {\n  upcomingTasks: assignedTasks(dueAfter: $now, orderBy: DUE_DATE_ASCENDING, excludeEnded: true, limit: 3) {\n    id\n    type\n    workout {\n      __typename\n      id\n    }\n    task {\n      __typename\n      id\n    }\n    ...AssignedTaskCard_assignedTask\n  }\n  overdueTasks: assignedTaskConnection(expiryAfter: $now, excludeEnded: true, dueBefore: $now, orderBy: DUE_DATE_ASCENDING, first: 1) {\n    totalCount\n  }\n}\n\nfragment ChallengesDebugger_student on Student {\n  id\n  gamification {\n    activeChallenges {\n      id\n      challengeTypeId\n      title\n      state\n      unitCount\n      unitTargetCount\n      timeSpan\n    }\n    id\n  }\n}\n\nfragment ChallengesModalBody_student on Student {\n  gamification {\n    activeChallenges {\n      id\n      title\n      state\n      unitCount\n      unitTargetCount\n      timeSpan\n      rewards {\n        points\n        coins\n      }\n    }\n    id\n  }\n}\n\nfragment ChallengesPanel_gamification on Gamification {\n  activeChallenges {\n    id\n    challengeTypeId\n    title\n    state\n    unitCount\n    unitTargetCount\n    timeSpan\n    rewards {\n      points\n      coins\n    }\n  }\n}\n\nfragment ChallengesPanel_student on Student {\n  gamification {\n    activeChallenges {\n      state\n      timeSpan\n      id\n    }\n    ...ChallengesPanel_gamification\n    id\n  }\n}\n\nfragment CustomMilo_student on Student {\n  gamification {\n    accessory {\n      systemId\n      riveFile\n      id\n    }\n    id\n  }\n}\n\nfragment HiddenNonAccessibleTasksLabelFragment on User {\n  profile {\n    __typename\n    ... on Student {\n      totalUpcomingTasks: assignedTaskConnection(first: 1, includeNonAccessibleTasks: true, excludeEnded: true, dueAfter: $dueAfter) @include(if: $hasEnabledAccessibilityMode) {\n        count: totalCount\n      }\n      totalUpcomingAccessibleTasks: assignedTaskConnection(first: 1, includeNonAccessibleTasks: false, excludeEnded: true, dueAfter: $dueAfter) @include(if: $hasEnabledAccessibilityMode) {\n        count: totalCount\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n    ... on Teacher {\n      id\n    }\n  }\n}\n\nfragment LeaderboardClassSelectionModal_student_1MWt7w on Student {\n  id\n  classes(first: $numberOfClasses) {\n    edges {\n      node {\n        id\n        title\n        displayName\n        hasEnabledLeaderboard\n      }\n    }\n  }\n  leaderboardClass {\n    class {\n      id\n    }\n    isDefault\n  }\n}\n\nfragment LeaderboardDock_student_yQGy8 on Student {\n  id\n  leaderboard @include(if: $hasLeaderboardDockEnabled) {\n    currentWeek(classId: $classId) {\n      points\n      rank\n      name\n      avatarUrl\n      studentId\n    }\n  }\n  user {\n    avatar\n    firstName\n    lastName\n    points {\n      current\n    }\n    id\n  }\n}\n\nfragment LeaderboardModal_student_5N7ZT on Student {\n  id\n  leaderboard @include(if: $fetchLeaderboardModalData) {\n    currentWeek(classId: $classId) {\n      points\n      rank\n      name\n      avatarUrl\n      studentId\n    }\n    previousWeek(classId: $classId) {\n      points\n      rank\n      name\n      avatarUrl\n      studentId\n    }\n  }\n  user {\n    avatar\n    firstName\n    lastName\n    points {\n      current\n    }\n    id\n  }\n  classes(first: $numberOfClasses) {\n    edges {\n      node {\n        hasEnabledLeaderboard\n        id\n      }\n    }\n  }\n  leaderboardClass {\n    class {\n      title\n      displayName\n      id\n    }\n  }\n}\n\nfragment LeaderboardPanel_student_6Jxyf on Student {\n  id\n  leaderboard {\n    currentWeek(classId: $classId) {\n      points\n      rank\n      rankDelta\n      name\n      avatarUrl\n      studentId\n    }\n  }\n  studentPreference {\n    collapsedLeaderboard\n    id\n  }\n}\n\nfragment Leaderboard_student_2EyqOV on Student {\n  id\n  user {\n    avatar\n    firstName\n    lastName\n    points {\n      current\n    }\n    id\n  }\n  classes(first: $numberOfClasses) {\n    edges {\n      node {\n        hasEnabledLeaderboard\n        displayName\n        id\n        title\n      }\n    }\n  }\n}\n\nfragment ShopPanel_profile_2S09y7 on Student {\n  gamification @include(if: $enableShop) {\n    coinsBalance\n    id\n  }\n}\n\nfragment SpinningWheelHeader_student_2S09y7 on Student {\n  gamification {\n    id\n    dailyCoinAwardOptions\n    todaysDailyCoinAward\n  }\n}\n\nfragment StudentDashboardV2Content_student_3EoIab on Student {\n  ...LeaderboardPanel_student_6Jxyf\n  ...ChallengesPanel_student\n  ...ShopPanel_profile_2S09y7\n  ...SunflowerStudentDashboardHeader_student_2S09y7\n}\n\nfragment StudentSkillsMapSubstrandProficiencyIndicator_student on LanternStudent {\n  selfReportedGrade {\n    order\n    id\n  }\n}\n\nfragment StudentSkillsMapSubstrandProficiencyIndicator_studentStrandStatus on StudentStrandStatus {\n  status\n  lastWorkedOnDiagnosticCheckIn {\n    endedAt\n    hasFinishedDiagnosticPhase\n    id\n  }\n}\n\nfragment StudentSkillsMapSubstrandProficiencyIndicator_substrand on Substrand {\n  id\n  badgeUrl\n  gradeSubstrands {\n    id\n    gradeStrand {\n      grade {\n        id\n        order\n      }\n      id\n    }\n  }\n}\n\nfragment StudentSkillsMapSubstrandRecommendationsFragment on Query {\n  lantern {\n    substrand(id: $substrandId) {\n      id\n      title\n      strand {\n        id\n      }\n      studentSubtopicRecommendations {\n        id\n        ...SubtopicRecommendationCard_substrandSubtopicRecommendation\n        category\n      }\n    }\n    viewer {\n      __typename\n      ... on LanternStudent {\n        strandStatus(strandId: $strandId) {\n          status\n          lastWorkedOnDiagnosticCheckIn {\n            id\n          }\n          strand {\n            id\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment SubtopicRecommendationCard_substrandSubtopicRecommendation on SubstrandSubtopicRecommendation {\n  subtopic {\n    id\n    title\n    topic {\n      id\n      badgeBackground\n      badgeUrl\n      syllabus {\n        id\n      }\n    }\n    hasAdaptivePractice\n    gamifiedMastery\n  }\n  category\n  outcomes {\n    id\n    title\n  }\n}\n\nfragment SunflowerStudentDashboardHeaderWithLearningFocus_lantern on Lantern {\n  substrand(id: $substrandId) {\n    id\n    ...StudentSkillsMapSubstrandProficiencyIndicator_substrand\n    title\n    canStartCheckIn\n    strand {\n      id\n    }\n  }\n  viewer {\n    __typename\n    ... on LanternStudent {\n      learningFocus {\n        id\n      }\n      ...StudentSkillsMapSubstrandProficiencyIndicator_student\n      strandStatus(strandId: $strandId) {\n        ...StudentSkillsMapSubstrandProficiencyIndicator_studentStrandStatus\n        status\n        lastWorkedOnDiagnosticCheckIn {\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment SunflowerStudentDashboardHeaderWithNoLearningFocus_profile on Profile {\n  __isProfile: __typename\n  __typename\n  ... on Student {\n    assignedTasks(dueAfter: $now, excludeEnded: true, limit: 1) {\n      status\n      id\n    }\n    ...CustomMilo_student\n  }\n}\n\nfragment SunflowerStudentDashboardHeader_lantern_1v0x6m on Lantern {\n  ...SunflowerStudentDashboardHeaderWithLearningFocus_lantern @include(if: $isLearningFocusSet)\n  ...WeeklyPbHeaderCheckInButton_lantern\n}\n\nfragment SunflowerStudentDashboardHeader_student_2S09y7 on Student {\n  gamification {\n    activeChallenges {\n      state\n      id\n    }\n    hasAwardedDailyCoins\n    id\n  }\n  ...SpinningWheelHeader_student_2S09y7\n  ...WeeklyPbHeader_student\n}\n\nfragment TeacherRecognitionNotification_student on Student {\n  teacherRecognitions(limit: 1) {\n    id\n    sticker\n    message\n    createdOn\n    fromTeacher {\n      id\n      user {\n        firstName\n        lastName\n        id\n      }\n    }\n  }\n}\n\nfragment WeeklyPbHeaderCheckInButton_lantern on Lantern {\n  substrand(id: $substrandId) {\n    id\n    strand {\n      id\n    }\n    canStartCheckIn\n  }\n  viewer {\n    __typename\n    ... on LanternStudent {\n      strandStatus(strandId: $strandId) {\n        status\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment WeeklyPbHeaderCheckInButton_student on Student {\n  assignedTasks(dueAfter: $now, excludeEnded: true, limit: 1) {\n    status\n    id\n  }\n}\n\nfragment WeeklyPbHeader_student on Student {\n  user {\n    points {\n      current\n      best\n      bestPreviousWeekThisHalfYear\n    }\n    id\n  }\n  ...WeeklyPbHeaderCheckInButton_student\n}\n",
      operationName: "SunflowerStudentDashboardQuery",
      variables: {
        now: "2025-07-08T11:20:26.752Z",
        hasEnabledAccessibilityMode: viewerProviderQueryResponse.data.viewer.userPreference.hasEnabledAccessibilityMode,
        dueAfter: "2025-07-08T11:20:26.752Z",
        isLearningFocusSet: viewerProviderQueryResponse.data.lantern.viewer.learningFocusStatus === "VALID",
        strandId: viewerProviderQueryResponse.data.lantern.viewer.id,
        substrandId: viewerProviderQueryResponse.data.lantern.viewer.learningFocus.id,
        numberOfClasses: 1000,
        enableClassSelectionPrompt:
          viewerProviderQueryResponse.data.viewer.featureFlagsV2.gamificationEnableLeaderboardClassSelectionPrompt,
        hasLeaderboardDockEnabled:
          viewerProviderQueryResponse.data.viewer.featureFlagsV2.gamificationEnableLeaderboardDock,
        fetchLeaderboardModalData:
          viewerProviderQueryResponse.data.viewer.featureFlagsV2.gamificationEnableLeaderboardModalV2,
        enableShop: viewerProviderQueryResponse.data.viewer.featureFlagsV2.gamificationEnableShop,
      },
    }),
  };

  const result = await fetch("https://mathspace.co/graphql/public/", options);
  return result.json();
}

export async function getBasicInformation() {
  const viewerProviderQueryResponse = await ViewerProviderQuery();

  const data = {
    name: {
      first: viewerProviderQueryResponse.data.viewer.firstName,
      last: viewerProviderQueryResponse.data.viewer.lastName,
    },
    email: viewerProviderQueryResponse.data.viewer.email,
    learningFocus: {
      id: viewerProviderQueryResponse.data.lantern.viewer.learningFocus.id,
      name: viewerProviderQueryResponse.data.lantern.viewer.learningFocus.title,
    },
  };
  return data;
}

export async function getAssignedTasks() {
  const viewerProviderQueryResponse = await ViewerProviderQuery();
  const sunflowerStudentDashboardQueryResponse = await SunflowerStudentDashboardQuery(viewerProviderQueryResponse);
  const tasksData = sunflowerStudentDashboardQueryResponse.viewer.upcomingTasks;
  const tasks = [] as {
    name: string;
    taskId: string;
    workoutId: string;
    url: string;
    problems: number;
    problemsDone: number;
    percent: number;
  }[];

  tasksData.forEach(
    (task: { task: { title: string; id: string }; workout: { id: string; problems: { outcome: string }[] } }) => {
      tasks.push({
        name: task.task.title,
        taskId: task.task.id,
        workoutId: task.workout.id,
        url: `https://mathspace.co/work/${task.workout.id}/`,
        problems: task.workout.problems.length,
        problemsDone: task.workout.problems.filter((problem: { outcome: string }) => problem.outcome === "CORRECT")
          .length,
        percent: Math.round(
          (task.workout.problems.filter((problem: { outcome: string }) => problem.outcome === "CORRECT").length /
            task.workout.problems.length) *
            100,
        ),
      });
    },
  );

  const data = {
    tasks,
  };
  return data;
}

export async function getLeaderboard() {
  const viewerProviderQueryResponse = await ViewerProviderQuery();
  const sunflowerStudentDashboardQueryResponse = await SunflowerStudentDashboardQuery(viewerProviderQueryResponse);

  const data = <
    {
      leaderboard: Array<{
        points: number;
        rank: number;
        name: string;
        avatarUrl: string;
        studentId: string;
        rankDelta: number;
      }>;
      xp: number;
      place: number;
    }
  >{
    leaderboard: sunflowerStudentDashboardQueryResponse.data.viewer.profile.leaderboard.currentWeek,
    xp: sunflowerStudentDashboardQueryResponse.data.lantern.viewer.selfReportedGrade.order,
    place: sunflowerStudentDashboardQueryResponse.data.viewer.profile.leaderboard.currentWeek.filter(
      (student: { studentId: string }) =>
        student.studentId.replace("Student-", "") ==
        sunflowerStudentDashboardQueryResponse.data.viewer.id.replace("User-", ""),
    )[0].rank,
  };

  return data;
}
