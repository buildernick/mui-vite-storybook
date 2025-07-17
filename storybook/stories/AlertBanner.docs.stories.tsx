import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography, Stack } from "@mui/material";
import AlertBanner from "../src/components/AlertBanner";

const meta: Meta<typeof AlertBanner> = {
  title: "Components/AlertBanner/Documentation",
  component: AlertBanner,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Complete documentation showing all AlertBanner variants and use cases.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <Box sx={{ padding: "64px 48px" }}>
      <Stack spacing={15}>
        {/* Filled Variants */}
        <Box>
          <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 500 }}>
            Filled Variants
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 500 }}>
            <AlertBanner
              severity="error"
              variant="filled"
              title="Error"
              description="Something went wrong. Please try again."
            />
            <AlertBanner
              severity="warning"
              variant="filled"
              title="Warning"
              description="Please review your input before proceeding."
            />
            <AlertBanner
              severity="info"
              variant="filled"
              title="Information"
              description="This is an informational alert message."
            />
            <AlertBanner
              severity="success"
              variant="filled"
              title="Success"
              description="Your action was completed successfully."
            />
          </Stack>
        </Box>

        {/* Outlined Variants */}
        <Box>
          <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 500 }}>
            Outlined Variants
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 500 }}>
            <AlertBanner
              severity="error"
              variant="outlined"
              title="Error"
              description="Something went wrong. Please try again."
            />
            <AlertBanner
              severity="warning"
              variant="outlined"
              title="Warning"
              description="Please review your input before proceeding."
            />
            <AlertBanner
              severity="info"
              variant="outlined"
              title="Information"
              description="This is an informational alert message."
            />
            <AlertBanner
              severity="success"
              variant="outlined"
              title="Success"
              description="Your action was completed successfully."
            />
          </Stack>
        </Box>

        {/* Standard Variants */}
        <Box>
          <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 500 }}>
            Standard Variants
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 500 }}>
            <AlertBanner
              severity="error"
              variant="standard"
              title="Error"
              description="Something went wrong. Please try again."
            />
            <AlertBanner
              severity="warning"
              variant="standard"
              title="Warning"
              description="Please review your input before proceeding."
            />
            <AlertBanner
              severity="info"
              variant="standard"
              title="Information"
              description="This is an informational alert message."
            />
            <AlertBanner
              severity="success"
              variant="standard"
              title="Success"
              description="Your action was completed successfully."
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
};

export const UsageExamples: Story = {
  render: () => (
    <Box sx={{ padding: "64px 48px" }}>
      <Stack spacing={15}>
        {/* Color Example */}
        <Box>
          <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 500 }}>
            Color
          </Typography>
          <Box sx={{ maxWidth: 500 }}>
            <AlertBanner
              severity="warning"
              variant="standard"
              showTitle={false}
              description="This is a success Alert with warning colors."
            />
          </Box>
        </Box>

        {/* Action Examples */}
        <Box>
          <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 500 }}>
            Action
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 500 }}>
            <AlertBanner
              severity="warning"
              variant="standard"
              showTitle={false}
              description="This Alert displays the default close icon."
              onClose={() => console.log("Close clicked")}
            />
            <AlertBanner
              severity="success"
              variant="standard"
              showTitle={false}
              description="This Alert uses a Button component for its action."
              action={{
                label: "UNDO",
                onClick: () => console.log("Action clicked"),
              }}
            />
          </Stack>
        </Box>

        {/* Colors Example */}
        <Box>
          <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 500 }}>
            Colors
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 500 }}>
            <AlertBanner
              severity="success"
              variant="standard"
              title="Success"
              description="This is a success message."
            />
            <AlertBanner
              severity="info"
              variant="standard"
              title="Information"
              description="This is an info message."
            />
            <AlertBanner
              severity="warning"
              variant="standard"
              title="Warning"
              description="This is a warning message."
            />
            <AlertBanner
              severity="error"
              variant="standard"
              title="Error"
              description="This is an error message."
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
};

export const ComponentShowcase: Story = {
  render: () => (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" sx={{ marginBottom: 6, fontWeight: 600 }}>
        AlertBanner Component Showcase
      </Typography>

      <Stack spacing={8}>
        {/* Severity Levels */}
        <Box>
          <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: 500 }}>
            Severity Levels
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 600 }}>
            <AlertBanner
              severity="error"
              title="Error"
              description="Critical system error occurred"
            />
            <AlertBanner
              severity="warning"
              title="Warning"
              description="Action required to continue"
            />
            <AlertBanner
              severity="info"
              title="Information"
              description="Additional context provided"
            />
            <AlertBanner
              severity="success"
              title="Success"
              description="Operation completed successfully"
            />
          </Stack>
        </Box>

        {/* Interactive Features */}
        <Box>
          <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: 500 }}>
            Interactive Features
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 600 }}>
            <AlertBanner
              severity="warning"
              title="Dismissible Alert"
              description="Click the X to close this alert"
              onClose={() => alert("Alert closed!")}
            />
            <AlertBanner
              severity="info"
              title="Action Alert"
              description="Click the action button to perform an action"
              action={{
                label: "LEARN MORE",
                onClick: () => alert("Action performed!"),
              }}
            />
            <AlertBanner
              severity="error"
              title="Full-Featured Alert"
              description="This alert has both close and action buttons"
              onClose={() => alert("Alert closed!")}
              action={{
                label: "RETRY",
                onClick: () => alert("Retrying..."),
              }}
            />
          </Stack>
        </Box>

        {/* Content Variations */}
        <Box>
          <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: 500 }}>
            Content Variations
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 600 }}>
            <AlertBanner
              severity="success"
              title="Title Only Alert"
              showDescription={false}
            />
            <AlertBanner
              severity="info"
              showTitle={false}
              description="Description only alert without a title"
            />
            <AlertBanner
              severity="warning"
              title="Long Content Alert"
              description="This is an example of an alert with longer content that demonstrates how the component handles text wrapping and maintains proper spacing and alignment across multiple lines."
            />
          </Stack>
        </Box>

        {/* Expandable Details */}
        <Box>
          <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: 500 }}>
            Expandable Details
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 600 }}>
            <AlertBanner
              severity="error"
              title="System Error"
              description="An unexpected error occurred while processing your request."
              details="Stack trace: Error at line 42 in main.js\nCaused by: Network timeout after 30 seconds\nRequest ID: abc123\nTimestamp: 2024-01-15 14:30:25\nUser session: user_456789\n\nTo resolve this issue, please try refreshing the page or contact support if the problem persists."
              showDetails={true}
            />
            <AlertBanner
              severity="warning"
              variant="filled"
              title="Performance Notice"
              description="Your current plan usage is approaching the monthly limit."
              details="Current usage: 95% of monthly allocation\nRemaining requests: 127 out of 2,500\nBilling cycle resets: January 31, 2024\n\nConsider upgrading your plan to avoid service interruptions."
              showDetails={true}
              action={{
                label: "UPGRADE",
                onClick: () => console.log("Upgrade clicked"),
              }}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
};
