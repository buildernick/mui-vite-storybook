import * as React from "react";
import { Box, Typography, IconButton, Button, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Error as ErrorIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  CheckCircle as SuccessIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

export type AlertSeverity = "error" | "warning" | "info" | "success";
export type AlertVariant = "filled" | "outlined" | "standard";

export interface AlertBannerProps {
  severity?: AlertSeverity;
  variant?: AlertVariant;
  title?: string;
  description?: string;
  details?: string;
  showTitle?: boolean;
  showDescription?: boolean;
  showDetails?: boolean;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  sx?: any;
}

const severityIcons = {
  error: ErrorIcon,
  warning: WarningIcon,
  info: InfoIcon,
  success: SuccessIcon,
};

const AlertContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "severity" && prop !== "variant",
})<{ severity: AlertSeverity; variant: AlertVariant }>(
  ({ theme, severity, variant }) => {
    const getColors = () => {
      const colors = {
        error: {
          main: "#D32F2F",
          dark: "#5F2120",
          background: "#FDEDED",
          contrastText: "#FFFFFF",
        },
        warning: {
          main: "#EF6C00",
          dark: "#663C00",
          background: "#FFF4E5",
          contrastText: "#FFFFFF",
        },
        info: {
          main: "#0288D1",
          dark: "#014361",
          background: "#E5F6FD",
          contrastText: "#FFFFFF",
        },
        success: {
          main: "#2E7D32",
          dark: "#1E4620",
          background: "#EDF7ED",
          contrastText: "#FFFFFF",
        },
      };
      return colors[severity];
    };

    const colors = getColors();

    if (variant === "filled") {
      return {
        display: "flex",
        alignItems: "flex-start",
        padding: "6px 16px",
        borderRadius: "4px",
        backgroundColor: colors.main,
        color: colors.contrastText,
        fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
      };
    }

    if (variant === "outlined") {
      return {
        display: "flex",
        alignItems: "flex-start",
        padding: "6px 16px",
        borderRadius: "4px",
        backgroundColor: "#FFFFFF",
        border: `1px solid ${colors.main}`,
        color: colors.dark,
        fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
      };
    }

    // Standard variant
    return {
      display: "flex",
      alignItems: "flex-start",
      padding: "6px 16px",
      borderRadius: "4px",
      backgroundColor: colors.background,
      color: colors.dark,
      fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
    };
  }
);

const IconContainer = styled(Box)({
  display: "flex",
  padding: "7px 12px 7px 0px",
  alignItems: "flex-start",
});

const ContentContainer = styled(Box)({
  display: "flex",
  padding: "8px 0px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "4px",
  flex: "1 0 0",
});

const ActionContainer = styled(Box)({
  display: "flex",
  padding: "4px 0px 0px 16px",
  alignItems: "flex-start",
});

const CloseContainer = styled(Box)({
  display: "flex",
  padding: "4px 0px 0px 16px",
  alignItems: "flex-start",
});

export default function AlertBanner({
  severity = "info",
  variant = "standard",
  title = "{Title}",
  description = "{Description}",
  details,
  showTitle = true,
  showDescription = true,
  showDetails = false,
  onClose,
  action,
  sx,
}: AlertBannerProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const IconComponent = severityIcons[severity];

  const getIconColor = () => {
    if (variant === "filled") {
      return "#FFFFFF";
    }

    const iconColors = {
      error: "#D32F2F",
      warning: "#EF6C00",
      info: "#0288D1",
      success: "#2E7D32",
    };
    return iconColors[severity];
  };

  const getTextColor = () => {
    if (variant === "filled") {
      return "#FFFFFF";
    }

    const textColors = {
      error: "#5F2120",
      warning: "#663C00",
      info: "#014361",
      success: "#1E4620",
    };
    return textColors[severity];
  };

  const getActionButtonColor = () => {
    if (variant === "filled") {
      return "#FFFFFF";
    }

    const actionColors = {
      error: "#5F2120",
      warning: "#663C00",
      info: "#014361",
      success: "#1E4620",
    };
    return actionColors[severity];
  };

  return (
    <AlertContainer severity={severity} variant={variant} sx={sx}>
      <IconContainer>
        <IconComponent
          sx={{
            width: 22,
            height: 22,
            color: getIconColor(),
          }}
        />
      </IconContainer>

      <ContentContainer>
        {showTitle && (
          <Typography
            sx={{
              alignSelf: "stretch",
              color: getTextColor(),
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: variant === "filled" ? 400 : 500,
              lineHeight: "150%",
              letterSpacing: "0.15px",
            }}
          >
            {title}
          </Typography>
        )}

        {showDescription && (
          <Typography
            sx={{
              alignSelf: "stretch",
              color: getTextColor(),
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "143%",
              letterSpacing: variant === "filled" ? "0.15px" : "0.17px",
            }}
          >
            {description}
          </Typography>
        )}
      </ContentContainer>

      {action && (
        <ActionContainer>
          <Button
            onClick={action.onClick}
            variant="text"
            size="small"
            sx={{
              color: getActionButtonColor(),
              padding: "4px 5px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "22px",
              letterSpacing: "0.46px",
              textTransform: "uppercase",
              fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
              minWidth: "auto",
              "&:hover": {
                backgroundColor: alpha(getActionButtonColor(), 0.08),
              },
            }}
          >
            {action.label}
          </Button>
        </ActionContainer>
      )}

      {onClose && (
        <CloseContainer>
          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              color: getTextColor(),
              padding: "5px",
              borderRadius: "100px",
              "&:hover": {
                backgroundColor: alpha(getTextColor(), 0.08),
              },
            }}
          >
            <CloseIcon sx={{ width: 20, height: 20 }} />
          </IconButton>
        </CloseContainer>
      )}
    </AlertContainer>
  );
}
