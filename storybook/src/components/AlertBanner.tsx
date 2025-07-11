import * as React from "react";
import { Box, IconButton, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseIcon from "@mui/icons-material/Close";

export type AlertSeverity =
  | "error"
  | "warning"
  | "info"
  | "success"
  | "nothing";
export type AlertVariant = "filled" | "outlined" | "standard";

export interface AlertBannerProps {
  severity?: AlertSeverity;
  variant?: AlertVariant;
  title?: string;
  description?: string;
  showTitle?: boolean;
  showDescription?: boolean;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  sx?: object;
}

const severityConfig = {
  error: {
    icon: ErrorOutlineIcon,
    colors: {
      filled: {
        background: "#D32F2F",
        color: "#FFFFFF",
        iconColor: "#FFFFFF",
      },
      outlined: {
        background: "#FFFFFF",
        color: "#5F2120",
        iconColor: "#D32F2F",
        border: "1px solid #D32F2F",
      },
      standard: {
        background: "#FDEDED",
        color: "#5F2120",
        iconColor: "#D32F2F",
      },
    },
  },
  warning: {
    icon: WarningAmberOutlinedIcon,
    colors: {
      filled: {
        background: "#EF6C00",
        color: "#FFFFFF",
        iconColor: "#FFFFFF",
      },
      outlined: {
        background: "#FFFFFF",
        color: "#663C00",
        iconColor: "#EF6C00",
        border: "1px solid #EF6C00",
      },
      standard: {
        background: "#FFF4E5",
        color: "#663C00",
        iconColor: "#EF6C00",
      },
    },
  },
  info: {
    icon: InfoOutlinedIcon,
    colors: {
      filled: {
        background: "#0288D1",
        color: "#FFFFFF",
        iconColor: "#FFFFFF",
      },
      outlined: {
        background: "#FFFFFF",
        color: "#014361",
        iconColor: "#0288D1",
        border: "1px solid #0288D1",
      },
      standard: {
        background: "#E5F6FD",
        color: "#014361",
        iconColor: "#0288D1",
      },
    },
  },
  success: {
    icon: CheckCircleOutlinedIcon,
    colors: {
      filled: {
        background: "#2E7D32",
        color: "#FFFFFF",
        iconColor: "#FFFFFF",
      },
      outlined: {
        background: "#FFFFFF",
        color: "#1E4620",
        iconColor: "#2E7D32",
        border: "1px solid #2E7D32",
      },
      standard: {
        background: "#EDF7ED",
        color: "#1E4620",
        iconColor: "#2E7D32",
      },
    },
  },
  nothing: {
    icon: CircleOutlinedIcon,
    colors: {
      filled: {
        background: "#FFFFFF",
        color: "#000000",
        iconColor: "#000000",
      },
      outlined: {
        background: "#FFFFFF",
        color: "#000000",
        iconColor: "#000000",
        border: "1px solid #E0E0E0",
      },
      standard: {
        background: "#FFFFFF",
        color: "#000000",
        iconColor: "#000000",
      },
    },
  },
};

const AlertContainer = styled(Box)<{
  alertSeverity: AlertSeverity;
  alertVariant: AlertVariant;
}>(({ alertSeverity, alertVariant }) => {
  const config = severityConfig[alertSeverity].colors[alertVariant];

  return {
    display: "flex",
    alignItems: "flex-start",
    padding: "6px 16px",
    borderRadius: "4px",
    backgroundColor: config.background,
    color: config.color,
    border: config.border || "none",
    fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
    width: "100%",
    minHeight: "48px",

    "@media (max-width: 600px)": {
      padding: "8px 12px",
      flexDirection: "column",
      gap: "8px",
    },
  };
});

const IconContainer = styled(Box)({
  display: "flex",
  padding: "7px 12px 7px 0px",
  alignItems: "flex-start",
  flexShrink: 0,

  "@media (max-width: 600px)": {
    padding: "4px 8px 4px 0px",
  },
});

const ContentContainer = styled(Box)({
  display: "flex",
  padding: "8px 0px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "4px",
  flex: "1 0 0",
});

const ActionsContainer = styled(Box)({
  display: "flex",
  padding: "4px 0px 0px 16px",
  alignItems: "flex-start",
  flexShrink: 0,

  "@media (max-width: 600px)": {
    padding: "4px 0px",
    width: "100%",
    justifyContent: "flex-end",
  },
});

const AlertTitle = styled(Typography)<{
  alertSeverity: AlertSeverity;
  alertVariant: AlertVariant;
}>(({ alertSeverity, alertVariant }) => {
  const config = severityConfig[alertSeverity].colors[alertVariant];

  return {
    alignSelf: "stretch",
    color: config.color,
    fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: "0.15px",
    margin: 0,
  };
});

const AlertDescription = styled(Typography)<{
  alertSeverity: AlertSeverity;
  alertVariant: AlertVariant;
}>(({ alertSeverity, alertVariant }) => {
  const config = severityConfig[alertSeverity].colors[alertVariant];

  return {
    alignSelf: "stretch",
    color: config.color,
    fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "143%",
    letterSpacing: "0.17px",
    margin: 0,
  };
});

const StyledIconButton = styled(IconButton)<{
  alertSeverity: AlertSeverity;
  alertVariant: AlertVariant;
}>(({ alertSeverity, alertVariant }) => {
  const config = severityConfig[alertSeverity].colors[alertVariant];

  return {
    padding: "5px",
    borderRadius: "100px",
    color: config.color,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  };
});

const StyledActionButton = styled(Button)<{
  alertSeverity: AlertSeverity;
  alertVariant: AlertVariant;
}>(({ alertSeverity, alertVariant }) => {
  const config = severityConfig[alertSeverity].colors[alertVariant];

  return {
    padding: "4px 5px",
    borderRadius: "4px",
    color: config.color,
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "22px",
    letterSpacing: "0.46px",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  };
});

export default function AlertBanner({
  severity = "info",
  variant = "standard",
  title,
  description,
  showTitle = true,
  showDescription = true,
  onClose,
  action,
  sx,
}: AlertBannerProps) {
  const IconComponent = severityConfig[severity].icon;
  const config = severityConfig[severity].colors[variant];

  return (
    <AlertContainer alertSeverity={severity} alertVariant={variant} sx={sx}>
      <IconContainer>
        <IconComponent
          sx={{
            width: "22px",
            height: "22px",
            color: config.iconColor,
          }}
        />
      </IconContainer>

      <ContentContainer>
        {showTitle && title && (
          <AlertTitle
            alertSeverity={severity}
            alertVariant={variant}
            component="div"
          >
            {title}
          </AlertTitle>
        )}

        {showDescription && description && (
          <AlertDescription
            alertSeverity={severity}
            alertVariant={variant}
            component="div"
          >
            {description}
          </AlertDescription>
        )}
      </ContentContainer>

      {(onClose || action) && (
        <ActionsContainer>
          {action && (
            <StyledActionButton
              alertSeverity={severity}
              alertVariant={variant}
              variant="text"
              size="small"
              onClick={action.onClick}
            >
              {action.label}
            </StyledActionButton>
          )}

          {onClose && (
            <StyledIconButton
              alertSeverity={severity}
              alertVariant={variant}
              size="small"
              onClick={onClose}
            >
              <CloseIcon sx={{ width: "20px", height: "20px" }} />
            </StyledIconButton>
          )}
        </ActionsContainer>
      )}
    </AlertContainer>
  );
}
