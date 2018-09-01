package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Rasheed\\workspace\\bddsample\\src\\main\\java\\feature\\login.feature",
		glue={"loginStepDef"},
		dryRun=false,
		monochrome=true,
		strict=true,
		format={"pretty","html:test-output"}
		)

public class LoginTestRunner {

}
