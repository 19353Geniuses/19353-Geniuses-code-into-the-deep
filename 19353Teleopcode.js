// Geniuses 19353 Copyright
// We are the builders of the world

package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.hardware.DcMotor;

@com.qualcomm.robotcore.eventloop.opmode.TeleOp(name = "19353TeleOp", group = "Linear Opmode")
public class 19353TeleOp extends OpMode {

    private DcMotor leftDrive;
    private DcMotor rightDrive;

    @Override
    public void init() {
        leftDrive = hardwareMap.get(DcMotor.class, "left_drive"); // Replace "left_drive" with your configuration name
        rightDrive = hardwareMap.get(DcMotor.class, "right_drive"); // Replace "right_drive" with your configuration name

        leftDrive.setDirection(DcMotor.Direction.FORWARD);
        rightDrive.setDirection(DcMotor.Direction.REVERSE);
    }

    @Override
    public void loop() {
        double drive = -gamepad1.left_stick_y;
        double turn = gamepad1.right_stick_x;

        double leftPower = drive + turn;
        double rightPower = drive - turn;

        leftDrive.setPower(leftPower);
        rightDrive.setPower(rightPower);
    }
}

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
