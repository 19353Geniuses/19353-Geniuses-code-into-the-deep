

# README for Geniuses 19353 FTC Programming

## Overview
This repository contains the basic starter programs for the **Geniuses 19353 FTC team**. These programs include:

1. **TeleOp Mode**: A driver-controlled program for real-time robot operation.
2. **Autonomous Mode**: Pre-programmed routines for the autonomous phase of competition, including basic movement and color-sensing actions.

These programs are written in Java and are intended to serve as templates for rookie teams to begin their journey in FTC programming. These are not advanced programs for experienced teams like us.

---

## Code Files

### TeleOp Mode
**File Name**: `TeleOpMode.java`

This program allows the robot to be controlled using a gamepad during the TeleOp phase of an FTC match.

#### Key Features:
- Gamepad input for controlling robot movement.
- Simple tank drive implementation using two motors (`left_drive` and `right_drive`).

#### Usage:
1. Replace the placeholder name in the configuration section with your actual hardware mapping:
   ```java
   leftDrive = hardwareMap.get(DcMotor.class, "left_drive");
   rightDrive = hardwareMap.get(DcMotor.class, "right_drive");
   ```
2. Deploy the code to your FTC Robot Controller.
3. Start the TeleOp program from the driver station.

---

### Basic Autonomous Mode
**File Name**: `AutonomousMode.java`

This program performs a sequence of actions autonomously during the Autonomous phase of an FTC match.

#### Key Features:
- Moves forward for a specific time.
- Stops the robot after the routine completes.

#### Usage:
1. Replace the placeholder name in the configuration section with your actual hardware mapping:
   ```java
   leftDrive = hardwareMap.get(DcMotor.class, "left_drive");
   rightDrive = hardwareMap.get(DcMotor.class, "right_drive");
   ```
2. Adjust the movement and sleep durations as needed:
   ```java
   leftDrive.setPower(0.5);
   rightDrive.setPower(0.5);
   sleep(1000);
   ```
3. Deploy the code to your FTC Robot Controller.
4. Start the Autonomous program from the driver station.

---

### Color Sensor Autonomous Mode
**File Name**: `SensorColorCode.java`

This program uses a color sensor to detect the color red and move the motors accordingly. It is designed to introduce beginner teams to sensor integration.

#### Key Features:
- **Color Detection**: Detects red color using the `color_sensor`.
- **Motor Control**: Activates the motors when red is detected; stops when red is not detected.
- **Telemetry Feedback**: Displays color detection status on the driver station.

#### Usage:
1. Replace the placeholder name in the configuration section with your actual hardware mapping:
   ```java
   leftDrive = hardwareMap.get(DcMotor.class, "left_drive");
   rightDrive = hardwareMap.get(DcMotor.class, "right_drive");
   colorSensor = hardwareMap.get(ColorSensor.class, "color_sensor");
   ```
2. Deploy the code to your FTC Robot Controller.
3. Start the Autonomous program from the driver station.

#### Example Telemetry Output:
- **Red Detected**:
  ```
  Color: Red detected
  ```
- **No Red Detected**:
  ```
  Color: No red detected
  ```

---

## How to Configure the Robot

1. Open the FTC Robot Controller app on your robot controller phone.
2. Navigate to **Configure Robot**.
3. Add the motor and sensor names to match the names used in the code:
   - Motors:
     - `left_drive`
     - `right_drive`
   - Sensor:
     - `color_sensor`

---

## Important Notes
- Ensure that your motors, sensors, and other hardware are properly connected and configured before running the programs.
- These codes are basic templates intended for rookie teams. Modify and expand them to include additional functionalities like servos, advanced sensors, or complex movement logic.
- Always test your code in a safe environment to prevent damage to the robot or surroundings.

---

## License
**Geniuses 19353 Copyright**  
*"We are the builders of the world."*

This code is open for learning and modification for FTC purposes. Attribution to **Geniuses 19353** when used.

