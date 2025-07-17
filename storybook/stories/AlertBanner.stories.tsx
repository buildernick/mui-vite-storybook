import type { Meta, StoryObj } from "@storybook/react";
import AlertBanner from "../src/components/AlertBanner";

const meta: Meta<typeof AlertBanner> = {
  title: "Components/AlertBanner",
  component: AlertBanner,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Alert banners display important messages to users with different severity levels and variants. Supports expandable details for additional information.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    severity: {
      control: "select",
      options: ["error", "warning", "info", "success"],
      description: "The type of alert",
    },
    variant: {
      control: "select",
      options: ["filled", "outlined", "standard"],
      description: "The variant of the alert",
    },
    title: {
      control: "text",
      description: "The title text of the alert",
    },
    description: {
      control: "text",
      description: "The description text of the alert",
    },
    details: {
      control: "text",
      description:
        "Additional detailed information (up to 5 lines when expanded)",
    },
    showTitle: {
      control: "boolean",
      description: "Whether to show the title",
    },
    showDescription: {
      control: "boolean",
      description: "Whether to show the description",
    },
    showDetails: {
      control: "boolean",
      description: "Whether to show the details expansion functionality",
    },
    onClose: {
      description: "Callback fired when the close button is clicked",
    },
    action: {
      description: "Action button configuration",
    },
  },
  args: {
    onClose: () => console.log("Close clicked"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    severity: "info",
    variant: "standard",
    title: "Information",
    description: "This is an informational alert message.",
  },
};

export const Error: Story = {
  args: {
    severity: "error",
    variant: "standard",
    title: "Error",
    description: "Something went wrong. Please try again.",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    variant: "standard",
    title: "Warning",
    description: "Please review your input before proceeding.",
  },
};

export const Success: Story = {
  args: {
    severity: "success",
    variant: "standard",
    title: "Success",
    description: "Your action was completed successfully.",
  },
};

// Filled variants
export const FilledError: Story = {
  args: {
    severity: "error",
    variant: "filled",
    title: "Error",
    description: "Something went wrong. Please try again.",
  },
};

export const FilledWarning: Story = {
  args: {
    severity: "warning",
    variant: "filled",
    title: "Warning",
    description: "Please review your input before proceeding.",
  },
};

export const FilledInfo: Story = {
  args: {
    severity: "info",
    variant: "filled",
    title: "Information",
    description: "This is an informational alert message.",
  },
};

export const FilledSuccess: Story = {
  args: {
    severity: "success",
    variant: "filled",
    title: "Success",
    description: "Your action was completed successfully.",
  },
};

// Outlined variants
export const OutlinedError: Story = {
  args: {
    severity: "error",
    variant: "outlined",
    title: "Error",
    description: "Something went wrong. Please try again.",
  },
};

export const OutlinedWarning: Story = {
  args: {
    severity: "warning",
    variant: "outlined",
    title: "Warning",
    description: "Please review your input before proceeding.",
  },
};

export const OutlinedInfo: Story = {
  args: {
    severity: "info",
    variant: "outlined",
    title: "Information",
    description: "This is an informational alert message.",
  },
};

export const OutlinedSuccess: Story = {
  args: {
    severity: "success",
    variant: "outlined",
    title: "Success",
    description: "Your action was completed successfully.",
  },
};

// With close button
export const WithCloseButton: Story = {
  args: {
    severity: "warning",
    variant: "standard",
    title: "Warning",
    description: "This Alert displays the default close icon.",
    onClose: () => console.log("Close clicked"),
  },
};

// With action button
export const WithActionButton: Story = {
  args: {
    severity: "success",
    variant: "standard",
    title: "Success",
    description: "This Alert uses a Button component for its action.",
    action: {
      label: "UNDO",
      onClick: () => console.log("Action clicked"),
    },
  },
};

// Without title
export const WithoutTitle: Story = {
  args: {
    severity: "warning",
    variant: "standard",
    showTitle: false,
    description: "This is a success Alert with warning colors.",
  },
};

// Without description
export const WithoutDescription: Story = {
  args: {
    severity: "info",
    variant: "standard",
    title: "Information",
    showDescription: false,
  },
};

// Title only
export const TitleOnly: Story = {
  args: {
    severity: "error",
    variant: "filled",
    title: "Error occurred",
    showDescription: false,
  },
};

// Description only
export const DescriptionOnly: Story = {
  args: {
    severity: "success",
    variant: "standard",
    showTitle: false,
    description: "Operation completed successfully.",
  },
};

// Complex example with all features
export const ComplexExample: Story = {
  args: {
    severity: "warning",
    variant: "standard",
    title: "Action Required",
    description:
      "Your session will expire in 5 minutes. Please save your work.",
    onClose: () => console.log("Close clicked"),
    action: {
      label: "EXTEND SESSION",
      onClick: () => console.log("Extend session clicked"),
    },
  },
};

// Custom styling example
export const CustomStyling: Story = {
  args: {
    severity: "info",
    variant: "standard",
    title: "Custom Alert",
    description: "This alert has custom styling applied.",
    sx: {
      width: "100%",
      maxWidth: "600px",
      margin: "16px auto",
    },
  },
};

// Responsive example
export const ResponsiveWidth: Story = {
  args: {
    severity: "success",
    variant: "filled",
    title: "Responsive Alert",
    description: "This alert adapts to different screen sizes.",
    sx: {
      width: "100%",
      maxWidth: { xs: "100%", sm: "500px", md: "600px" },
    },
  },
};

// Expandable details examples
export const WithExpandableDetails: Story = {
  args: {
    severity: "error",
    variant: "standard",
    title: "System Error",
    description: "An unexpected error occurred while processing your request.",
    details:
      "Stack trace: Error at line 42 in main.js\nCaused by: Network timeout after 30 seconds\nRequest ID: abc123\nTimestamp: 2024-01-15 14:30:25\nUser session: user_456789\n\nTo resolve this issue, please try refreshing the page or contact support if the problem persists.",
    showDetails: true,
  },
};

export const WithExpandableDetailsWarning: Story = {
  args: {
    severity: "warning",
    variant: "standard",
    title: "Performance Notice",
    description: "Your current plan usage is approaching the monthly limit.",
    details:
      "Current usage: 95% of monthly allocation\nRemaining requests: 127 out of 2,500\nBilling cycle resets: January 31, 2024\n\nConsider upgrading your plan to avoid service interruptions. You can also optimize your API calls by implementing caching or reducing request frequency.",
    showDetails: true,
    action: {
      label: "UPGRADE PLAN",
      onClick: () => console.log("Upgrade plan clicked"),
    },
  },
};

export const WithExpandableDetailsInfo: Story = {
  args: {
    severity: "info",
    variant: "filled",
    title: "Maintenance Scheduled",
    description: "System maintenance is scheduled for this weekend.",
    details:
      "Maintenance window: Saturday, January 20, 2024\nStart time: 11:00 PM PST\nExpected duration: 4 hours\nAffected services: API, Dashboard, Mobile App\n\nDuring this time, you may experience intermittent service interruptions. All data will be preserved and no action is required from your end.",
    showDetails: true,
    onClose: () => console.log("Close clicked"),
  },
};
