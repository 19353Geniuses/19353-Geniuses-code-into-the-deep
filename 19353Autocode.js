// Geniuses 19353 Copyright
// We are the builders of the world

package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.hardware.DcMotor;

@com.qualcomm.robotcore.eventloop.opmode.Autonomous(name = "19353Autonomous", group = "Linear Opmode")
public class 19353Autonomous extends LinearOpMode {

    private DcMotor leftDrive;
    private DcMotor rightDrive;

    @Override
    public void runOpMode() {
        leftDrive = hardwareMap.get(DcMotor.class, "left_drive"); // Replace "left_drive" with your configuration name
        rightDrive = hardwareMap.get(DcMotor.class, "right_drive"); // Replace "right_drive" with your configuration name

        leftDrive.setDirection(DcMotor.Direction.FORWARD);
        rightDrive.setDirection(DcMotor.Direction.REVERSE);

        waitForStart();

        moveForward(0.5, 1000);
        stopMotors();
    }

    private void moveForward(double power, long timeInMillis) {
        leftDrive.setPower(power);
        rightDrive.setPower(power);
        sleep(timeInMillis);
    }

    private void stopMotors() {
        leftDrive.setPower(0);
        rightDrive.setPower(0);
    }
}