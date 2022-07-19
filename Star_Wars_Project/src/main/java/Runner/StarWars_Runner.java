package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/BlacK_BearD/Chahna_workspace/Star_Wars_Project/src/main/java/Features/Star_War.feature", 
		glue = { "Step_Defi" }, 
		plugin = { "pretty", "html:test-output", "json:json-output/cucumber.json", "junit:target/cucumber-reports/Cucumber.xml" }, 
		monochrome = true, 
		dryRun =false,
		tags="@Regression"
		)

public class StarWars_Runner {

	

	
}
