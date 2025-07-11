import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Typography } from "@mui/material";
import AlertBanner, {
  AlertBannerProps,
  AlertSeverity,
  AlertVariant,
} from "../src/components/AlertBanner";

const meta: Meta<typeof AlertBanner> = {
  title: "Components/AlertBanner",
  component: AlertBanner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "AlertBanner component for displaying important messages with different severity levels and variants. Supports filled, outlined, and standard variants with error, warning, info, and success severity levels.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    severity: {
      control: { type: "select" },
      options: ["error", "warning", "info", "success", "nothing"],
      description: "The severity level of the alert",
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "standard"],
      description: "The visual variant of the alert",
    },
    title: {
      control: { type: "text" },
      description: "The title text of the alert",
    },
    description: {
      control: { type: "text" },
      description: "The description text of the alert",
    },
    showTitle: {
      control: { type: "boolean" },
      description: "Whether to show the title",
    },
    showDescription: {
      control: { type: "boolean" },
      description: "Whether to show the description",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    severity: "info",
    variant: "standard",
    title: "Information",
    description: "This is an informational alert message.",
    showTitle: true,
    showDescription: true,
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    severity: "warning",
    variant: "standard",
    title: "Warning Alert",
    description: "This is a warning message that you should pay attention to.",
    showTitle: true,
    showDescription: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to test different combinations of props.",
      },
    },
  },
};

// All Severity Levels - Standard Variant
export const AllSeverityLevelsStandard: Story = {
  render: () => {
    const severities: AlertSeverity[] = [
      "success",
      "info",
      "warning",
      "error",
      "nothing",
    ];

    return (
      <Stack spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
        <Typography variant="h6" component="h2">
          Standard Variant - All Severity Levels
        </Typography>
        {severities.map((severity) => (
          <AlertBanner
            key={severity}
            severity={severity}
            variant="standard"
            title={`${
              severity.charAt(0).toUpperCase() + severity.slice(1)
            } Alert`}
            description={`This is a ${severity} alert with standard variant styling.`}
          />
        ))}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "All severity levels (success, info, warning, error) using the standard variant.",
      },
    },
  },
};

// All Severity Levels - Outlined Variant
export const AllSeverityLevelsOutlined: Story = {
  render: () => {
    const severities: AlertSeverity[] = [
      "success",
      "info",
      "warning",
      "error",
      "nothing",
    ];

    return (
      <Stack spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
        <Typography variant="h6" component="h2">
          Outlined Variant - All Severity Levels
        </Typography>
        {severities.map((severity) => (
          <AlertBanner
            key={severity}
            severity={severity}
            variant="outlined"
            title={`${
              severity.charAt(0).toUpperCase() + severity.slice(1)
            } Alert`}
            description={`This is a ${severity} alert with outlined variant styling.`}
          />
        ))}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "All severity levels using the outlined variant with borders.",
      },
    },
  },
};

// All Severity Levels - Filled Variant
export const AllSeverityLevelsFilled: Story = {
  render: () => {
    const severities: AlertSeverity[] = [
      "success",
      "info",
      "warning",
      "error",
      "nothing",
    ];

    return (
      <Stack spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
        <Typography variant="h6" component="h2">
          Filled Variant - All Severity Levels
        </Typography>
        {severities.map((severity) => (
          <AlertBanner
            key={severity}
            severity={severity}
            variant="filled"
            title={`${
              severity.charAt(0).toUpperCase() + severity.slice(1)
            } Alert`}
            description={`This is a ${severity} alert with filled variant styling.`}
          />
        ))}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "All severity levels using the filled variant with solid backgrounds.",
      },
    },
  },
};

// Complete Variant Matrix
export const CompleteVariantMatrix: Story = {
  render: () => {
    const severities: AlertSeverity[] = [
      "error",
      "warning",
      "info",
      "success",
      "nothing",
    ];
    const variants: AlertVariant[] = ["filled", "outlined", "standard"];

    return (
      <Stack spacing={4} sx={{ width: "100%", maxWidth: 800 }}>
        <Typography variant="h5" component="h2">
          Complete Alert Variant Matrix
        </Typography>
        {variants.map((variant) => (
          <Box key={variant}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ mb: 2, textTransform: "capitalize" }}
            >
              {variant} Variant
            </Typography>
            <Stack spacing={2}>
              {severities.map((severity) => (
                <AlertBanner
                  key={`${variant}-${severity}`}
                  severity={severity}
                  variant={variant}
                  title={`${
                    severity.charAt(0).toUpperCase() + severity.slice(1)
                  }`}
                  description={`${
                    severity.charAt(0).toUpperCase() + severity.slice(1)
                  } description`}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete matrix showing all combinations of severity levels and variants.",
      },
    },
  },
};

// With Close Button
export const WithCloseButton: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
      <Typography variant="h6" component="h2">
        Alerts with Close Button
      </Typography>
      <AlertBanner
        severity="warning"
        variant="standard"
        title="Dismissible Warning"
        description="This alert displays the default close icon."
        onClose={() => alert("Alert closed!")}
      />
      <AlertBanner
        severity="error"
        variant="outlined"
        title="Critical Error"
        description="This error alert can be dismissed by clicking the close button."
        onClose={() => alert("Error alert closed!")}
      />
      <AlertBanner
        severity="success"
        variant="filled"
        title="Success"
        description="Operation completed successfully. Click to dismiss."
        onClose={() => alert("Success alert closed!")}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Alerts with close buttons that can be dismissed by users.",
      },
    },
  },
};

// With Action Button
export const WithActionButton: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
      <Typography variant="h6" component="h2">
        Alerts with Action Button
      </Typography>
      <AlertBanner
        severity="success"
        variant="standard"
        title="Operation Complete"
        description="This Alert uses a Button component for its action."
        action={{
          label: "UNDO",
          onClick: () => alert("Undo action clicked!"),
        }}
      />
      <AlertBanner
        severity="info"
        variant="outlined"
        title="Update Available"
        description="A new version of the application is available."
        action={{
          label: "UPDATE",
          onClick: () => alert("Update action clicked!"),
        }}
      />
      <AlertBanner
        severity="warning"
        variant="filled"
        title="Storage Almost Full"
        description="Your storage is 90% full. Consider freeing up some space."
        action={{
          label: "MANAGE",
          onClick: () => alert("Manage storage clicked!"),
        }}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Alerts with action buttons for user interactions.",
      },
    },
  },
};

// With Both Close and Action
export const WithBothCloseAndAction: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
      <Typography variant="h6" component="h2">
        Alerts with Both Close and Action Buttons
      </Typography>
      <AlertBanner
        severity="warning"
        variant="standard"
        title="Connection Issue"
        description="Unable to connect to the server. Check your internet connection."
        action={{
          label: "RETRY",
          onClick: () => alert("Retry clicked!"),
        }}
        onClose={() => alert("Alert dismissed!")}
      />
      <AlertBanner
        severity="error"
        variant="outlined"
        title="Payment Failed"
        description="Your payment could not be processed. Please try again."
        action={{
          label: "RETRY PAYMENT",
          onClick: () => alert("Retry payment clicked!"),
        }}
        onClose={() => alert("Payment alert dismissed!")}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Alerts with both action and close buttons for maximum flexibility.",
      },
    },
  },
};

// Title Only
export const TitleOnly: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
      <Typography variant="h6" component="h2">
        Title Only Alerts
      </Typography>
      <AlertBanner
        severity="error"
        variant="filled"
        title="Critical Error Occurred"
        showDescription={false}
      />
      <AlertBanner
        severity="warning"
        variant="outlined"
        title="Warning Message"
        showDescription={false}
      />
      <AlertBanner
        severity="success"
        variant="standard"
        title="Success"
        showDescription={false}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Alerts showing only the title without description text.",
      },
    },
  },
};

// Description Only
export const DescriptionOnly: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: 600 }}>
      <Typography variant="h6" component="h2">
        Description Only Alerts
      </Typography>
      <AlertBanner
        severity="info"
        variant="standard"
        description="This is a success Alert with warning colors."
        showTitle={false}
      />
      <AlertBanner
        severity="warning"
        variant="outlined"
        description="Important information that doesn't need a title."
        showTitle={false}
      />
      <AlertBanner
        severity="success"
        variant="filled"
        description="Operation completed successfully without any issues."
        showTitle={false}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Alerts showing only the description without title text.",
      },
    },
  },
};

// Long Content
export const LongContent: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: "100%", maxWidth: 800 }}>
      <Typography variant="h6" component="h2">
        Alerts with Long Content
      </Typography>
      <AlertBanner
        severity="error"
        variant="standard"
        title="Authentication Error - Unable to Process Request"
        description="Your session has expired due to inactivity. This is a security measure to protect your account. Please log in again to continue using the application. If you continue to experience issues, please contact our support team for assistance."
        onClose={() => alert("Long error alert closed!")}
      />
      <AlertBanner
        severity="info"
        variant="outlined"
        title="System Maintenance Scheduled"
        description="We will be performing scheduled maintenance on our servers this weekend from Saturday 2:00 AM to Sunday 6:00 AM EST. During this time, some features may be temporarily unavailable. We apologize for any inconvenience this may cause."
        action={{
          label: "LEARN MORE",
          onClick: () => alert("Learn more clicked!"),
        }}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Alerts with longer content to test text wrapping and layout.",
      },
    },
  },
};

// Responsive Design
export const ResponsiveDesign: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" component="h2">
        Responsive Design - Try resizing the viewport
      </Typography>
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        <AlertBanner
          severity="warning"
          variant="standard"
          title="Responsive Alert"
          description="This alert adapts to different screen sizes. On mobile devices, the layout changes to stack elements vertically for better readability."
          action={{
            label: "ACTION",
            onClick: () => alert("Responsive action clicked!"),
          }}
          onClose={() => alert("Responsive alert closed!")}
        />
      </Box>
      <Box sx={{ width: "100%", maxWidth: 400 }}>
        <AlertBanner
          severity="info"
          variant="outlined"
          title="Mobile View"
          description="This shows how the alert looks in a narrower container, similar to mobile viewport."
          onClose={() => alert("Mobile alert closed!")}
        />
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how alerts adapt to different screen sizes and container widths.",
      },
    },
  },
};
